'use client';
import { ReactNode, useState } from 'react';
import { clsx } from 'clsx';
import { ButtonBar } from './ButtonBar';
import { Close } from './Close';

export function SearchBar(): ReactNode {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <div
    className={clsx(
      'w-full bg-transparent border-blue-300 border-[0.1px] dark:bg-gridBg dark:border-none px-4 py-1 rounded-md items-center flex justify-between',
      isFocus ? 'dark:bg-blue-900' : ''
    )}
    >
      <input
        type="text"
        className="w-[30%] bg-transparent outline-none border-none text-gridBg dark:text-textColor text-[14px]"
        placeholder="Search..."
        onFocus={() => setIsFocus(true)}
      />

      {isFocus ? <Close onClose={setIsFocus} /> : <ButtonBar />}
    </div>
  );
}
