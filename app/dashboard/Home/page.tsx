import Card from '@/app/ui/home/Card';
import Filter from '@/app/ui/home/Filter';
import { ReactNode } from 'react';

export default function Page(): ReactNode {
  return (<div className="w-full text-secondary dark:text-gray-400 flex flex-col">
    <h1 className='mb-8'>Accueil  /  <span className='font-bold'>Blog</span></h1>
    <Filter />
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-4 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
    </div>
  </div>);
}
