import React, { ReactNode } from 'react'

export default function Input({ placeholder } : { placeholder : string }) : ReactNode {
  return (
    <div className='w-full'>
        <input id='Post Title' type="text" className='w-full px-6 py-3 focus:outline-none focus:ring-0 focus:border-none bg-secondary rounded-lg' placeholder={placeholder} />
    </div>
  )
}
