"use client"
import { ChevronDown } from 'lucide-react'
import React, { ReactNode, useState } from 'react'

export default function FilterCategory() : ReactNode {
    const [isFilter, setIsFilter] = useState(false);
  return (
    <div className='w-full md:max-w-[200px] bg-transparent shadow-sm border-[.5px] border-gray-500 dark:bg-secondary dark:border-none rounded-md py-2 px-4 relative' onClick={() => setIsFilter(!isFilter)} >
        <div className="flex items-center justify-between">
            <p>Toute categorie</p>
            <ChevronDown size={24} />
        </div>
        {isFilter && (<div className='absolute  z-10 w-full top-11 rounded-md shadow-sm dark:shadow-none left-0 bg-gray-50 dark:bg-blue-800 py-2 px-4'>
            <p>Voyage</p>
            <p>Voyage</p>
        </div>)}
    </div>
  )
}
