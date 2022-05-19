import React from 'react'
import { ImgBienvenidaAdmin, TextBienvenidaDashboard, } from '../atoms'

const BienvenidaOkhlos = () => {
  return (
    <div className='flex justify-between'>
        <TextBienvenidaDashboard/>
        <ImgBienvenidaAdmin/>
        </div>
  )
}

export default BienvenidaOkhlos