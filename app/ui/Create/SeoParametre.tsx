import React, { ReactNode } from 'react'
import Input from '../Form/Input'
import TextArea from '../Form/TextArea'

export default function SeoParametre() : ReactNode {
  return (
    <div className='w-full mt-6'>
        <h1 className='text-2xl text-gray-600 dark:text-gray-200 mb-4'>Seo Parametre</h1>
        <Input placeholder='Meta titre' />
        <h2 className='mt-4 mb-2'>Meta Description</h2>
        <TextArea placeholder='' />
    </div>
  )
}
