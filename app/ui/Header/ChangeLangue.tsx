import { ReactNode } from 'react';
import Image from 'next/image';

export function ChangeLangue({ pathname }: { pathname: string }): ReactNode {
  return (
    <div className="rounded-sm p-1">
      <Image
        className="rounded-md"
        src={pathname}
        width={32}
        height={32}
        alt=""
      />
    </div>
  );
}
