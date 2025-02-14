import React, { ReactNode } from 'react'
import ToogleSwitch from '../components/ToogleSwitch'
import InputValueTag from '../Form/InputValueTag'
import { ListeDeroulante } from '../components/ListeDeroulante'
import ImageUploader from '../components/ImageUploader'

export default function Config() : ReactNode {
  return (
    <div className='w-full mt-6 flex flex-col gap-4'>
        <ToogleSwitch label='Publier' />
        <ToogleSwitch label='Autoriser les commentaires' />
        <div className="w-full">
            <h2 className='mb-4 text-gray-500'>Hash Tag</h2>
            <InputValueTag />
        </div>
        <div className="w-full">
            <h2 className='mb-4 text-gray-500'>Categorie</h2>
            <ListeDeroulante />
        </div><div className="w-full">
            <ImageUploader label='Image de couverture'  />
        </div>
    </div>
  )
}
