import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" | "icon"; children: ReactNode };

export function Button({ variant = "secondary", className = "", ...props }: Props) {
  return <button className={`button button--${variant} ${className}`} {...props} />;
}