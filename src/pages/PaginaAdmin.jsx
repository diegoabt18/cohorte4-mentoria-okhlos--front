import React from 'react'
import { NavbarDashboard, SidebarDashboard } from '../components/plantillas/Index'

const PaginaAdmin = () => {
    return (
        <div className='flex'>
            <div>
                <SidebarDashboard />
            </div>
            <div className='w-full'>
                <NavbarDashboard />
                aqui iria la dashboard
            </div>


        </div>
    )
}

export default PaginaAdmin