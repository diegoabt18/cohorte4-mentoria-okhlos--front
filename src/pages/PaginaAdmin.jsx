import React from 'react'
import { NavbarDashboard, SidebarDashboard } from '../components/plantillas/Index'
import {Welcome, } from '../components/organisms/Index'
import CardsInfoGeneral from '../components/organisms/CardsInfoGeneral'

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
            </div>


        </div>
    )
}

export default PaginaAdmin