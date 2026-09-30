import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-lime text-brand-ink hover:bg-[#C7E800] active:bg-[#B5D700] shadow-card",
  secondary:
    "bg-brand-blue text-white hover:bg-brand-blue-dark active:bg-[#0B19B8]",
  outline:
    "bg-white text-brand-ink border border-brand-border hover:border-brand-ink",
  ghost: "bg-transparent text-brand-ink hover:bg-brand-surface",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm rounded-lg",
  md: "h-11 px-5 text-sm rounded-xl",
  lg: "h-12 px-6 text-base rounded-xl",
};

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = "primary", size = "md", className = "", ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center font-semibold transition disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
        {...rest}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;