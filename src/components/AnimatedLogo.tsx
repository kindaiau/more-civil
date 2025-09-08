interface AnimatedLogoProps {
  className?: string;
  scrolled?: boolean;
}

export default function AnimatedLogo({ className = "", scrolled = false }: AnimatedLogoProps) {
  return (
    <img
      src="/more-civil-transparent-logo.svg"
      alt="More Civil"
      className={`h-24 md:h-36 w-auto ${className} ${!scrolled ? 'drop-shadow-lg' : ''} [image-rendering:crisp-edges] [image-rendering:-webkit-optimize-contrast]`}
      width="605"
      height="227"
      decoding="async"
    />
  );
}