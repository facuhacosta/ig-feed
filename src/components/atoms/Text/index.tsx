import { useMemo } from "react";

type TextProps = {
  children: React.ReactNode;
  type?: 'normal' | 'bold' | 'heading';
  className?: string
}

export default function Text({
  children,
  className
} : TextProps) {

  return <p className={`${className}`}>{children}</p>
}