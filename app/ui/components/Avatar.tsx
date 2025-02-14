import { ReactNode } from "react";

interface AvatarProps {
    children: ReactNode;
    className?: string;
  }
  
  interface AvatarImageProps {
    src: string;
    alt?: string;
    className?: string;
  }
  
  export const Avatar = ({ children, className = '' }: AvatarProps) => {
    return (
      <div className={`relative inline-block h-10 w-10 ${className}`}>
        {children}
      </div>
    );
  };
  
  export const AvatarImage = ({ src, alt = '', className = '' }: AvatarImageProps) => {
    return (
      <img
        src={src}
        alt={alt}
        className={`aspect-square h-full w-full rounded-full object-cover ${className}`}
      />
    );
  };
  
  export const AvatarFallback = ({ children, className = '' }: AvatarProps) => {
    return (
      <div className={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-gray-600 ${className}`}>
        {children}
      </div>
    );
  };