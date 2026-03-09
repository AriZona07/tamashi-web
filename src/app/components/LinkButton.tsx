import { AnchorHTMLAttributes, ReactNode } from 'react';

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function LinkButton({ 
  children, 
  className = '', 
  ...props 
}: LinkButtonProps) {
  
  const baseStyles = "flex items-center gap-2 rounded-lg px-6 py-3";
  
  const variantStyles = "bg-primary text-primary-foreground transition-opacity hover:opacity-90 shadow-lg shadow-muted";

  return (
    <a
      className={`${baseStyles} ${variantStyles} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
