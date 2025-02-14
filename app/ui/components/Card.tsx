import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
      {children}
    </div>
  );
};
export const CardContent = ({ children, className = '' }: CardProps) => {
    return (
      <div className={`p-6 ${className}`}>
        {children}
      </div>
    );
  };