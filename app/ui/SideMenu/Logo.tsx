'use client';
import Link from 'next/link';
import { ReactNode } from 'react';

export function Logo(): ReactNode {
  return (
    <Link href={'/dashboard'}>
      <h1 className="text-2xl font-bold mb-12 text-secondary dark:text-white">
        B<span className="text-yellow-500 dark:text-yellow-300">g</span>
      </h1>
    </Link>
  );
}
