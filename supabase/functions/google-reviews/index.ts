import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface GoogleReview {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
  time: number;
  photos?: Array<{
    photo_reference: string;
    height: number;
    width: number;
  }>;
}

interface FormattedReview {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
  time: number;
  original_url_to_review?: string;
  photo?: {
    thumb: string;
    full: string;
  };
}

const filterReviews = (reviews: GoogleReview[], apiKey: string): FormattedReview[] => {
  return reviews
    .filter(review => review.rating === 5 && review.photos && review.photos.length > 0)
    .sort((a, b) => b.time - a.time)
    .map(review => ({
      author_name: review.author_name,
      profile_photo_url: review.profile_photo_url,
      rating: review.rating,
      text: review.text,
      time: review.time,
      original_url_to_review: `https://search.google.com/local/writereview?placeid=${Deno.env.get('GOOGLE_PLACE_ID') || 'ChIJN1t_tDeuEmsRUsoyG83frY4'}`,
      photo: review.photos && review.photos[0] ? {
        thumb: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${review.photos[0].photo_reference}&key=${apiKey}`,
        full: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photoreference=${review.photos[0].photo_reference}&key=${apiKey}`
      } : undefined
    }));
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('GOOGLE_MAPS_API_KEY');
    const placeId = Deno.env.get('GOOGLE_PLACE_ID') || 'ChIJN1t_tDeuEmsRUsoyG83frY4';

    if (!apiKey) {
      console.error('GOOGLE_MAPS_API_KEY not found in environment');
      return new Response(JSON.stringify({ 
        error: 'Google Maps API key not configured',
        reviews: [],
        rating: 4.9,
        user_ratings_total: 50
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      });
    }

    console.log('Fetching Google Reviews with Place ID:', placeId);

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
    );

    if (!response.ok) {
      console.error('Google Places API error:', response.status, response.statusText);
      throw new Error(`Google Places API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Google Places API response:', JSON.stringify(data, null, 2));

    if (data.error_message) {
      console.error('Google Places API error message:', data.error_message);
      throw new Error(`Google Places API: ${data.error_message}`);
    }

    const reviews = data.result?.reviews || [];
    const rating = data.result?.rating || 4.9;
    const userRatingsTotal = data.result?.user_ratings_total || 50;

    const filteredReviews = filterReviews(reviews, apiKey);

    console.log(`Filtered ${filteredReviews.length} reviews from ${reviews.length} total reviews`);

    return new Response(JSON.stringify({
      reviews: filteredReviews,
      rating,
      user_ratings_total: userRatingsTotal
    }), {
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600'
      },
    });

  } catch (error) {
    console.error('Error in google-reviews function:', error);
    
    // Return fallback data instead of throwing error
    return new Response(JSON.stringify({
      reviews: [],
      rating: 4.9,
      user_ratings_total: 50,
      error: error.message
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200
    });
  }
});