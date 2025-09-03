import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium leading-tight [font-size:clamp(14px,1.6vw,16px)] px-[1.25em] py-[0.75em] min-h-[44px] min-w-[112px] text-center whitespace-nowrap max-[360px]:whitespace-normal [text-wrap:balance] overflow-hidden text-ellipsis rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#00B4D8] to-white text-[#0B1F2A] border-2 border-[#0B1F2A] shadow hover:from-[#00A3C4] hover:to-white",
        outline:
          "border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white",
      },
      size: {
        default: "",
        sm: "[font-size:clamp(13px,1.4vw,15px)] px-[1em] py-[0.5em] min-h-[40px] min-w-[96px]",
        lg: "[font-size:clamp(15px,1.8vw,18px)] px-[1.5em] py-[0.9em] min-h-[48px] min-w-[128px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
