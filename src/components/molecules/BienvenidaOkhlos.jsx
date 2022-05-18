import React from 'react'
import { ImgBienvenidaAdmin, TextBienvenidaDashboard, } from '../atoms'

const BienvenidaOkhlos = () => {
  return (
    <div className='flex gap-x-2 items-center justify-around '>
        <TextBienvenidaDashboard/>
        <ImgBienvenidaAdmin/>
        </div>
  )
}

export default BienvenidaOkhlos