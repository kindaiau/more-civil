interface AnimatedLogoProps {
  className?: string;
}

export default function AnimatedLogo({ className = "" }: AnimatedLogoProps) {
  return (
    <img
      src="/MORECIVILFINALLOGOFORWEB.svg"
      alt="More Civil"
      className={`h-14 md:h-16 w-auto ${className}`}
      width="2500"
      height="1406"
      decoding="async"
    />
  );
}