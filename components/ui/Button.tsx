import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

  let variantClasses = "";
  if (variant === "primary")
    variantClasses = "bg-primary text-primary-foreground hover:bg-primary/90";
  else if (variant === "secondary")
    variantClasses =
      "bg-secondary text-secondary-foreground hover:bg-secondary/80";
  else if (variant === "outline")
    variantClasses =
      "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground";
  else if (variant === "ghost")
    variantClasses = "hover:bg-accent hover:text-accent-foreground";

  let sizeClasses = "";
  if (size === "sm") sizeClasses = "h-8 px-3 text-sm";
  else if (size === "md") sizeClasses = "h-10 px-4";
  else if (size === "lg") sizeClasses = "h-12 px-6 text-lg";

  return (
    <button
      className={cn(baseClasses, variantClasses, sizeClasses, className)}
      {...props}
    />
  );
}
