import React from 'react'
import { BasicButton, TextInfoDashBoard } from '../atoms'

const DashboardOptions = () => {
  return (
    <div className='flex gap-x-2 items-center justify-around'>
        <TextInfoDashBoard/>
        <div className='flex gap-x-8 justify-between w-1/3' >
        <BasicButton/>
        <BasicButton/>
        </div>
    </div>
  )
}

export default DashboardOptions