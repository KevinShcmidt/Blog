import React, { ReactNode } from 'react'

export default function Search() : ReactNode {
  return (
    <div className='w-full md:max-w-[300px]'>
        <input type="text" className='py-2 px-4 w-full outline-none bg-transparent shadow-sm border-[.5px] border-gray-500 dark:bg-secondary dark:border-none rounded-md' placeholder='search' />
    </div>
  )
}
