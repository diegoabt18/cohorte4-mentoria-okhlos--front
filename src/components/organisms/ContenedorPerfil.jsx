import React from 'react'
import { BasicButton, BasicButtonIcon } from '../atoms'

import Perfil from '../molecules/Perfil'
import UserLogin from '../molecules/UserLogin'

const ContenedorPerfil = () => {
    return (
        <div className=''>
            <ul class="menu menu-horizontal bg-base-100 rounded-box p-2 ">
                <li tabindex="0">
                    <span><UserLogin /></span>
                    <ul class="rounded-box bg-base-100 p-2 w-full">
                        <a>
                            <Perfil />
                            <div className='bg-white flex justify-end mt-3'>
                                <BasicButton />
                            </div>
                        </a>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default ContenedorPerfil