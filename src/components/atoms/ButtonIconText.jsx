import React from 'react'
import { Icon } from '@iconify/react'

const ButtonIconText = () => {
  return (
    <button type="button" className="text-black font-Roboto bg-PrimarioColor2 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
  <Icon icon= "healthicons:excel-logo" style={{display:'inline'}}/>
  Descargar
</button>
  )
}

export default ButtonIconText