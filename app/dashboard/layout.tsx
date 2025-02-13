"use client";
import { ReactNode } from 'react';
import { SideMenu } from '../ui/SideMenu/SideMenu';
import { SearchBar } from '../ui/Header/SearchBar';
import Footer from '../ui/footer/Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min:h-screen flex items-start bg-gray-200 dark:bg-[#000814]">
      <SideMenu />
      <div className="w-full flex flex-col mx-6 md:ml-[120px] my-2 gap-6">
        <SearchBar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
