import React from 'react';
import {OnlyItemMenu,ItemMenu} from '../molecules'
import {IconMenu} from '../atoms'

const MenuDesktop = () => {
    return (
        <div className='font-Roboto'>
            <div className='bg-PrimarioColor5 text-white p-2 font-bold'> 
                    Menu Principal
            </div>
           <OnlyItemMenu icon={"ci:home-alt-outline"} text={"Inicio"} />

           <ItemMenu icon={"ph:student-fill"} text={"Estudiantes"}  >
               <IconMenu icon={"akar-icons:circle"} text={"Cargar Datos"}/>
               <IconMenu icon={"akar-icons:circle"} text={"Informe Estudiantes"}/>
           </ItemMenu>
           <ItemMenu icon={"carbon:user-profile"} text={"Mentores"}  >
               <IconMenu icon={"akar-icons:circle"} text={"Cargar Datos"}/>
               <IconMenu icon={"akar-icons:circle"} text={"Informe Mentores"}/>
           </ItemMenu>
           <ItemMenu icon={"fontisto:equalizer"} text={"Match"}  >
               <IconMenu icon={"akar-icons:circle"} text={"Realizar Match"}/>
           </ItemMenu>
           <ItemMenu icon={"carbon:group-presentation"} text={"Sesiones"}  >
               <IconMenu icon={"akar-icons:circle"} text={"Informe Sesiones"}/>
           </ItemMenu>
        </div>
    )
}

export default MenuDesktop