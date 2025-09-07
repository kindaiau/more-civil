interface AnimatedLogoProps {
  className?: string;
}

export default function AnimatedLogo({ className = "" }: AnimatedLogoProps) {
  return (
    <img
      src="/more-civil-transparent-logo.svg"
      alt="More Civil"
      className={`h-42 md:h-48 w-auto ${className}`}
      width="605"
      height="227"
      decoding="async"
    />
  );
}