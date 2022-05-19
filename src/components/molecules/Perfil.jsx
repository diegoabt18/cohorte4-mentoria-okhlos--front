import React from 'react'
import { BasicButton, PersonName, PhotoProfile, Rol } from '../atoms'


const Perfil = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-PrimarioColor2 p-1'>
            <a href="" className='text-center w-full items-center flex flex-col'> 
                <PhotoProfile />
                <PersonName />
                <Rol />
            </a>
        </div>
    )
}

export default Perfil