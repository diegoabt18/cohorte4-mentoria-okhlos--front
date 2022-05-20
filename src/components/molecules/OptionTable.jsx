import React from 'react'
import { Search, ButtonIconText, ButtonLoadDataExcel } from '../atoms'

const OptionTable = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <Search />
            </div>
            <div className='flex'>
                <ButtonIconText text={"Descargar"} icon={"healthicons:excel-logo"} />
                <ButtonIconText text={"Cargar Datos"} icon={"akar-icons:circle-plus"} />
                <ButtonIconText text={"Cargar Estudiante"} icon={"akar-icons:circle-plus"} />
            </div>

        </div>
    )
}

export default OptionTable