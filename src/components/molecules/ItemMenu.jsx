import React from 'react'
import { IconMenu } from '../atoms'

const ItemMenu = ({icon, text, children} ) => {
  return (
    <div>
      <div tabIndex="0" className="collapse collapse-arrow bg-base-100 ">
        <div className="collapse-title  font-medium">
          <IconMenu icon={icon} text={text}/>
        </div>
        <div className="collapse-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ItemMenu