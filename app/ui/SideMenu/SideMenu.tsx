'use client';
import { ReactNode, useState } from 'react';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { Home, FilePen, Library, FilePenLine } from 'lucide-react';

export function SideMenu(): ReactNode {
  const [isHover, setIsHover] = useState<boolean>(false);
  const iconComponents = {
    Home: Home,
    Library: Library,
    FilePen: FilePen,
    FilePenLine: FilePenLine,
  };
  const nav: {
    icon: keyof typeof iconComponents;
    label: string;
    path: string;
  }[] = [
    { icon: 'Home', label: 'Accueil', path: 'Home' },
    { icon: 'Library', label: 'Mon Blog', path: 'MyBlog' },
    { icon: 'FilePen', label: 'Créer', path: 'Create' },
    { icon: 'FilePenLine', label: 'Modifier', path: 'Edit' },
  ];
  return (
    <div
      className={`
        bg-white
    dark:bg-[#13293d] 
    flex flex-col 
    items-center 
    justify-start 
    py-4 
    px-4 
    h-screen 
    transition-all 
    duration-300 
    ease-in-out
    ${isHover ? 'w-64' : 'w-24'}
  `}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Logo />
      {nav.map((item, index) => (
        <NavLink
          key={index}
          Icon={iconComponents[item.icon]}
          navLabel={item.label}
          path={item.path}
          isHover={isHover}
        />
      ))}
    </div>
  );
}
