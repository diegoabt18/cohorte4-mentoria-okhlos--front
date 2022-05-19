import React from 'react'
import { NavbarDashboard, SidebarDashboard } from '../components/plantillas'
import {Welcome, ImgFase2,CardsInfoGeneral } from '../components/organisms/Index' 

const PaginaAdmin = () => {
    return (
        <div className='flex'>
            <div>
                <SidebarDashboard />
            </div>
            <div className='w-full'>
                <NavbarDashboard />
                <Welcome/>
                <CardsInfoGeneral/>
                <ImgFase2/>
            </div>


        </div>
    )
}

export default PaginaAdmin