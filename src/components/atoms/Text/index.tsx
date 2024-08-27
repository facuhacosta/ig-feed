import { useMemo } from "react";

type TextProps = {
  children: React.ReactNode;
  type?: 'normal' | 'bold' | 'heading';
  className?: string
}

export default function Text({
  children,
  type = 'normal',
  className
} : TextProps) {

  const createClasses = (): string => {
    const returnedClasses: string[] = ['']
    switch (type) {
      case 'normal':
        returnedClasses.push('')   
      case 'bold':
        returnedClasses.push('font-bold')   
      case 'heading':
        returnedClasses.push('text-lg')   
    }

    return "".concat(...returnedClasses)
  }

  const classes = useMemo(() => createClasses(), [type])

  return <p className={`${classes} ${className}`}>{children}</p>
}