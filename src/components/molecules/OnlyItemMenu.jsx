import React from 'react'
import { IconMenu } from '../atoms'

const OnlyItemMenu = ({icon, text}) => {
  return (
        <div className='pl-4 pt-2'>
            <IconMenu icon={icon} text={text} />
        </div>
  )
}

export default OnlyItemMenu