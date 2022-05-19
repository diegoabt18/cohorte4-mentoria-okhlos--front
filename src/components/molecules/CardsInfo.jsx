import React from 'react'
import {IconCard,CardInfo,BtnInfo, } from '../atoms'

const CardsInfo = () => {
  return (
        <div className='flex items-center justify-center flex-col w-full'>
        <div className='text-center items-center justify-center w-full bg-PrimarioColor1 grid grid-cols-2'>
        <CardInfo/>
        <IconCard/>
        </div>
        <BtnInfo/>
        </div>
  )
}

export default CardsInfo