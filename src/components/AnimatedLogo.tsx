interface AnimatedLogoProps {
  className?: string;
  scrolled?: boolean;
}

export default function AnimatedLogo({ className = "", scrolled = false }: AnimatedLogoProps) {
  return (
    <img
      src="/more-civil-transparent-logo.svg"
      alt="More Civil"
      className={`h-32 md:h-48 w-auto -ml-2 ${className} ${!scrolled ? 'drop-shadow-lg' : ''}`}
      width="605"
      height="227"
      decoding="async"
    />
  );
}