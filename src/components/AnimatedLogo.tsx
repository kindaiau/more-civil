import { useState, useEffect } from 'react';

interface AnimatedLogoProps {
  className?: string;
}

export default function AnimatedLogo({ className = "" }: AnimatedLogoProps) {
  const [gifLoaded, setGifLoaded] = useState(false);
  const [gifError, setGifError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleGifLoad = () => setGifLoaded(true);
  const handleGifError = () => setGifError(true);

  // Show static logo for reduced motion, load/error, or while GIF is loading
  const showStaticLogo = prefersReducedMotion || gifError || !gifLoaded;

  return (
    <div className={`relative ${className}`}>
      {/* Static SVG logo - always present as fallback */}
      <img
        src="/more-civil-transparent-logo.svg"
        alt="More Civil"
        className={`h-14 md:h-16 w-auto transition-opacity duration-300 ${
          showStaticLogo ? 'opacity-100' : 'opacity-0'
        }`}
        width="600"
        height="250"
        decoding="async"
      />

      {/* Animated GIF - only if motion is allowed */}
      {!prefersReducedMotion && (
        <img
          src="/brand/morecivil-logo.gif"
          className={`absolute inset-0 h-14 md:h-16 w-auto transition-opacity duration-300 ${
            gifLoaded && !gifError ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleGifLoad}
          onError={handleGifError}
          decoding="async"
          aria-hidden="true"
          alt=""
        />
      )}
    </div>
  );
}