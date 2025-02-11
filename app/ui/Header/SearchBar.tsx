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
        'w-full bg-gridBg px-4 py-1 rounded-md items-center flex justify-between',
        isFocus ? 'bg-blue-900' : ''
      )}
    >
      <input
        type="text"
        className="w-[30%] bg-transparent outline-none border-none text-textColor text-[14px]"
        placeholder="Search..."
        onFocus={() => setIsFocus(true)}
      />

      {isFocus ? <Close onClose={setIsFocus} /> : <ButtonBar />}
    </div>
  );
}
