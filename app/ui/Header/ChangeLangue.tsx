"use client";
import { ReactNode, useState } from 'react';
import Image from 'next/image';
import { useClickOutside } from '@/app/lib/utils';

export function ChangeLangue(): ReactNode {
  const languageData = [{
    language : "French",
    flag : "/images/flag/frs.jpg"
  }, {
     language : "English",
    flag : "/images/flag/usa.jpg"
  }]
  const [isChange, setIsChange]=useState<boolean>(false)
  const ref = useClickOutside<HTMLDivElement>(() => setIsChange(false));
  return (
    <div ref={ref} className="relative rounded-sm p-1 w-6 h-6" onClick={() => setIsChange(!isChange)} >
      <Image
        className="rounded-md"
        src="/images/flag/frs.jpg"
        fill={true}
        objectFit='cover'
        alt=""
      />
      { isChange && (<ul className="min-w-32 absolute flex flex-col gap-2 top-10 right-0 p-2 bg-gray-50 dark:bg-secondary rounded-md">
        {
          languageData.map((item, index) => ( 
            <div key={index} className='list-none text-secondary text-sm dark:text-white flex items-center justify-between'>
              <div className="relative w-6 h-6">
                <Image src={item.flag} className='rounded-sm' fill={true} objectFit='cover' alt='flag' />
              </div>
              <p>{item.language}</p>
            </div>
          ))
        }
      </ul>)}
    </div>
  );

}
