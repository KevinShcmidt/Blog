"use client";
import { ReactNode, useState } from 'react';
import { useClickOutside } from '@/app/lib/utils';

export function ListeDeroulante(): ReactNode {
  const listeData = ["Test", "Test", "Test", "Test"]
  const [isChange, setIsChange]=useState<boolean>(false)
  const ref = useClickOutside<HTMLDivElement>(() => setIsChange(false));
  return (
    <div ref={ref} className="relative rounded-lg p-4 w-full bg-secondary" onClick={() => setIsChange(!isChange)} >
      <p>Categories</p>
      { isChange && (<ul className="w-full min-w-32 absolute flex flex-col gap-2 top-10 right-0 p-2 bg-gray-50 dark:bg-secondary rounded-md">
        {
          listeData.map((item, index) => ( 
            <div key={index} className='list-none text-secondary text-sm dark:text-white flex items-center justify-between'>
              <p>{item}</p>
            </div>
          ))
        }
      </ul>)}
    </div>
  );

}
