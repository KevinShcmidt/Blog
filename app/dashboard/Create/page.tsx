import Content from '@/app/ui/Create/Content'
import SeoParametre from '@/app/ui/Create/SeoParametre'
import Input from '@/app/ui/Form/Input'
import React, { ReactNode } from 'react'

export default function Page() : ReactNode {
  return (
    <div className='w-full text-secondary dark:text-gray-400 flex flex-col'>
        <h1 className='mb-8'>Créer  /  <span className='font-bold'>Blog</span></h1>
        <div className="w-full p-4 bg-primary rounded-md">
          <Input placeholder='Titre du post' />
          <Content />
          <SeoParametre />
        </div>
    </div>
  )
}
