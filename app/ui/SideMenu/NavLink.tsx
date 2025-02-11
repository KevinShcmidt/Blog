"use client";
import { IconType } from '@/app/lib/definitions';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export function NavLink({
  Icon,
  navLabel,
  path,
  isHover,
}: {
  Icon: IconType;
  navLabel: string;
  path: string;
  isHover: boolean;
}): ReactNode {
  const pathName = usePathname();
  const isActive = `/dashboard/${path}` === pathName;
  const { theme, resolvedTheme } = useTheme();

  return (
    <Link
      href={`/dashboard/${path}`}
      className={clsx('w-full dark:text-white text-[#00b4d8] p-2 mb-4 gap-4 hover:bg-[#003566] dark:hover:bg-gridBg flex', {
        'py-2 px-4 rounded-md mb-2 justify-start items-start':
          isHover || isActive,
        'justify-center items-center': !isHover && !isActive,
        'bg-gradient-to-b from-blue-500 to-purple-500 p-2 rounded-md mb-2':
          isActive,
      })}
    >
      <div className="min-w-6">
        <Icon color={`${ theme === "dark" || resolvedTheme === "dark" ? "#ffffff" : "#00b4d8" }`} size={24} />
      </div>
      <span
        className={`
          transform
          transition-all
          duration-300
          ease-in-out
          whitespace-nowrap
          ${isHover ? 'block' : 'hidden'}
        `}
      >
        {navLabel}
      </span>
    </Link>
  );
}
