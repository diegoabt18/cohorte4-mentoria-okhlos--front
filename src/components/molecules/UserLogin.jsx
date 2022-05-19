import React from 'react'
import { PersonName, PhotoProfile } from '../atoms'

const UserLogin = () => {
    return (
        <div className='flex items-center gap-2'>
            <PhotoProfile />
            <PersonName />
        </div>
    )
}

export default UserLogin