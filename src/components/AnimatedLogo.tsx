interface AnimatedLogoProps {
  className?: string;
  scrolled?: boolean;
}

export default function AnimatedLogo({ className = "", scrolled = false }: AnimatedLogoProps) {
  return (
    <img
      src="/MORECIVILFINALLOGOFORWEB.svg"
      alt="More Civil"
      className={`h-24 md:h-36 w-auto ${className} ${!scrolled ? 'drop-shadow-lg' : ''} [image-rendering:crisp-edges] [image-rendering:-webkit-optimize-contrast]`}
      width="2500"
      height="936"
      decoding="async"
    />
  );
}