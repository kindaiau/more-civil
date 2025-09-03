import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import ReviewsSection from '../src/components/Reviews';

describe('Reviews component', () => {
  it('renders fetched reviews', async () => {
    vi.stubGlobal('fetch', () =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            rating: 5,
            user_ratings_total: 10,
            reviews: [
              {
                author_name: 'Jane',
                profile_photo_url: 'avatar.jpg',
                rating: 5,
                text: 'Great work!',
                relative_time_description: 'a day ago',
              },
            ],
            placePhotoRef: null,
          }),
      })
    );
    const { findByText, container } = render(<ReviewsSection />);
    await findByText('Great work!');
    expect(container).toMatchSnapshot();
  });
});
