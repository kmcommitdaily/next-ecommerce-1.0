import { ReactNode } from 'react';

interface TagsProps {
  children: ReactNode;
  className: string;
}

const Tags = ({ children, className }: TagsProps) => {
  return (
    <span className={`min-w-max p-2  box-border text-sm ${className}`}>
      {children}
    </span>
  );
};

export default Tags;
