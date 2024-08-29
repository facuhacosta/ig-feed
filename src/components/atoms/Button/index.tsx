import { useMemo } from "react";

type ButtonProps = {
  children: React.ReactNode;
  secondary?: boolean;
  className?: string
}

export default function Button({
  children,
  secondary,
  className
}: ButtonProps) {
  const createStyles = ():string => {
    if (secondary) {
      return 'rounded-lg min-w-[25px] p-1 hover:bg-[#606060]'
    } else {
      return 'bg-[#363636] rounded-lg p-1 hover:bg-[#606060]'
    }
  }

  const styles = useMemo(() => createStyles(), [secondary])
  return <button aria-label="button" className={`${className} ${styles}`}>{children}</button>
}