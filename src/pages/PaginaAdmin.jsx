import React from 'react'
import { NavbarDashboard, SidebarDashboard } from '../components/templates/Index'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import EstudentPageLoad from './EstudentPageLoad';

const PaginaAdmin = () => {
    return (
        <div className='flex'>
            <div>
                <SidebarDashboard />
            </div>
            <div className='w-full'>
                <NavbarDashboard />
                <div id='Cuerpo'>
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path="/Home" element={<Dashboard/>}/>
                        <Route path="/EstudentLoad" element={<EstudentPageLoad/>}/>
                    </Routes>
                </div>
                
            </div>


        </div>
    )
}

export default PaginaAdmin