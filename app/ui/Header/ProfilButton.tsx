import Image from 'next/image';
import { ReactNode } from 'react';

export function ProfilButton({ pathname }: { pathname: string }): ReactNode {
  return (
    <div className="relative">
      <Image
        src={pathname}
        className="rounded-full"
        width={32}
        height={32}
        alt="Profif button"
      />
      <div className="w-3 h-3 rounded-full bg-green-400 absolute right-0 bottom-0"></div>
    </div>
  );
}
