import { useState, useRef, useEffect } from 'react';

interface AnimatedLogoProps {
  className?: string;
}

export default function AnimatedLogo({ className = "" }: AnimatedLogoProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    if (videoRef.current && !prefersReducedMotion) {
      videoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  // Always show static logo if reduced motion is preferred or video fails
  const showStaticLogo = prefersReducedMotion || videoError || !videoLoaded;

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
      
      {/* Animated WebM video - only if motion is allowed */}
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-14 md:h-16 w-auto transition-opacity duration-300 ${
            videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
          }`}
          // poster="/brand/MORECIVILFINALLOWRES.png" // Image missing - commented out
          muted
          loop
          playsInline
          onCanPlayThrough={handleVideoLoad}
          onError={handleVideoError}
          aria-hidden="true"
        >
          <source src="/brand/morecivil-logo.webm" type="video/webm" />
        </video>
      )}
    </div>
  );
}