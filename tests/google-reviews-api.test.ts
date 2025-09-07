import { describe, it, expect } from 'vitest';
import { selectFiveStar } from '../api/google-reviews';

describe('selectFiveStar', () => {
  it('returns newest three 5-star reviews with text', () => {
    const reviews = [
      { author_name: 'A', rating: 5, text: 'a', time: 1 },
      { author_name: 'B', rating: 5, text: 'b', time: 3 },
      { author_name: 'C', rating: 4, text: 'c', time: 2 },
      { author_name: 'D', rating: 5, text: 'd', time: 4 },
      { author_name: 'E', rating: 5, text: 'e', time: 5 },
    ];
    const result = selectFiveStar(reviews);
    expect(result).toHaveLength(3);
    expect(result.map((r) => r.author_name)).toEqual(['E', 'D', 'B']);
  });
});
