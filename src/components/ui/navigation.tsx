import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
  onClick?: () => void
  className?: string
}

export const NavLink = ({ 
  href, 
  children, 
  isActive = false, 
  onClick, 
  className 
}: NavLinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "relative px-3 py-2 rounded-lg font-medium transition-all duration-300",
        "hover:text-primary hover:bg-accent/50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isActive && "text-primary bg-accent font-semibold",
        isActive && "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-primary after:rounded-full",
        className
      )}
    >
      {children}
    </a>
  )
}

interface MobileNavLinkProps extends NavLinkProps {
  icon?: React.ReactNode
}

export const MobileNavLink = ({ 
  href, 
  children, 
  isActive = false, 
  onClick, 
  icon, 
  className 
}: MobileNavLinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isActive && "bg-accent text-accent-foreground font-semibold border-l-4 border-primary",
        className
      )}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </a>
  )
}