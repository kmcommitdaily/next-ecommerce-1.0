import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`max-w-max min-w-full max-h-96 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
