interface AnimatedLogoProps {
  className?: string;
  scrolled?: boolean;
}

export default function AnimatedLogo({ className = "", scrolled = false }: AnimatedLogoProps) {
  return (
    <img
      src="/MORECIVILFINALLOGOFORWEB.svg"
      alt="More Civil"
      className={`h-24 md:h-36 w-auto ${className} ${!scrolled ? 'drop-shadow-lg' : ''}`}
      width="605"
      height="227"
      decoding="async"
    />
  );
}