import React, { ReactNode } from 'react'
import Tiptap from '../components/TipTap'

export default function Content() : ReactNode {
  return (
    <div className='w-full mt-8'>
        <h1 className='text-gray-300 dark:text-gray-300'>Contenu</h1>

        <Tiptap />
    </div>
  )
}
