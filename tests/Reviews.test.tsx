import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import Reviews from '../src/components/Reviews';

describe('Reviews component', () => {
  it('renders fetched reviews', async () => {
    vi.stubGlobal('fetch', () =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            reviews: [
              {
                author_name: 'Jane',
                profile_photo_url: 'avatar.jpg',
                rating: 5,
                text: 'Great work!',
                time: 123,
                original_url_to_review: 'https://example.com',
                photo: { thumb: 'thumb.jpg', full: 'full.jpg' },
              },
            ],
          }),
      })
    );
    const { findByText, container } = render(<Reviews />);
    await findByText('Great work!');
    expect(container).toMatchSnapshot();
  });
});
