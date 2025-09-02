import { describe, it, expect } from 'vitest';
import { filterReviews } from '../api/reviews';
import type { GoogleReview } from '../api/reviews';

describe('filterReviews', () => {
  it('filters and formats reviews correctly', () => {
    const reviews = [
      {
        author_name: 'A',
        rating: 5,
        text: 'a',
        time: 1,
        profile_photo_url: 'p1',
        author_url: 'u1',
      },
      {
        author_name: 'B',
        rating: 5,
        text: 'b',
        time: 3,
        photos: [{ photo_reference: 'ref' }],
        author_url: 'u2',
      },
      {
        author_name: 'C',
        rating: 4,
        text: 'c',
        time: 2,
        profile_photo_url: 'p2',
      },
      {
        author_name: 'D',
        rating: 5,
        text: 'd',
        time: 4,
      },
      {
        author_name: 'E',
        rating: 5,
        text: 'e',
        time: 5,
        profile_photo_url: 'p3',
      },
    ];
    const result = filterReviews(reviews as GoogleReview[], 'test');
    expect(result).toHaveLength(3);
    expect(result[0].author_name).toBe('E');
    expect(result[1].author_name).toBe('B');
    expect(result[2].author_name).toBe('A');
    expect(result[1].photo?.thumb).toContain('photoreference=ref');
  });
});
