import { ReactNode } from 'react';
import Image from 'next/image';

export function ChangeLangue(): ReactNode {
  const languageData = [{
    language : "French",
    flag : "/images/flag/frs.webp"
  }, {
     language : "English",
    flag : "/images/flag/usa.webp"
  }]
  return (
    <div className="rounded-sm p-1 relative">
      <Image
        className="rounded-md"
        src="/images/flag/frs.webp"
        width={32}
        height={32}
        alt=""
      />
      <ul className="min-w-32 absolute top-10 right-0 p-2 bg-gray-50 dark:bg-secondary rounded-md">
        {
          languageData.map((item, index) => ( 
            <li key={index} className='list-none text-secondary dark:text-white space-y-2 flex items-center justify-between'><Image src={item.flag} className='rounded-sm' width={30} height={30} alt='flag' /><p>{item.language}</p></li>
          ))
        }
      </ul>
    </div>
  );
}
