import React from 'react'
import Image from 'next/image'

export default function Card() {
  return (
    <div className='w-full p-4 bg-gray-50 flex flex-col items-start shadow-lg border-[.5px] border-gray-500 dark:bg-gridBg dark:border-none rounded-xl'>
        <div className="w-full max-h-52 relative">
          <Image src="/images/setup.jpg" className='shadow-md' style={{borderRadius : "14px"}} width={500} height={500} objectFit='contain' alt="Blog image" sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
        </div>
        <div className="w-full text-start mt-4 mb-6 text-gridBg dark:text-gray-200">
          <h1 className='text-xl text-bold'>Setup work</h1>
        </div>
        <div className="w-full  flex items-center justify-start gap-4">
          <div className="relative w-12 h-12 rounded-full">
            <Image src="/images/avatar.webp" className='rounded-full' fill={true} objectFit='cover' alt="Blog image" sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
          </div>
          <div className="flex flex-col items-start justify-start">
              <h2 className='text-sm text-light text-gridBg dark:text-gray-400'>Kevin Schmidt</h2>
              <p className='text-sm text-light text-gridBg dark:text-gray-400'>05 June</p>
          </div>
        </div>
    </div>
  )
}
