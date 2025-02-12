import React, { ReactNode } from 'react'
import Search from './Search'
import FilterCategory from './FilterCategory'
import FilterTri from './FilterTri'

export default function Filter() : ReactNode{
  return (
    <div className='w-full text-sm flex flex-col md:flex-row items-center justify-between gap-4'>
        <Search />
        <div className="w-full flex dark:text-blue-600 flex-col md:flex-row items-center justify-end gap-4">
            <FilterCategory />
            <FilterTri />
        </div>
        
    </div>
  )
}
