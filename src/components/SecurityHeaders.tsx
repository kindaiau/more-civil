import { useEffect } from 'react';

const SecurityHeaders = () => {
  useEffect(() => {
    // Add security-related meta tags and headers where possible
    const metaTags = [
      { name: 'referrer', content: 'strict-origin-when-cross-origin' },
      { httpEquiv: 'X-Content-Type-Options', content: 'nosniff' },
      { httpEquiv: 'X-Frame-Options', content: 'DENY' },
    ];

    metaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[name="${tag.name}"], meta[http-equiv="${tag.httpEquiv}"]`);
      if (!existingTag) {
        const meta = document.createElement('meta');
        if (tag.name) meta.setAttribute('name', tag.name);
        if (tag.httpEquiv) meta.setAttribute('http-equiv', tag.httpEquiv);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });

    // Remove potentially dangerous window properties in development
    if (typeof window !== 'undefined') {
      // Prevent some common XSS vectors
      delete (window as any).eval;
    }
  }, []);

  return null;
};

export default SecurityHeaders;