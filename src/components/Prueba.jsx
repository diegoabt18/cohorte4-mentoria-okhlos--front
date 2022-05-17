import React from 'react'
import BtnEditTable from './atoms/BtnEditTable'
import ButtonEscuela from './atoms/ButtonEscuela'
import ButtonIconText from './atoms/ButtonIconText'
import CardInfo from './atoms/CardInfo'
import IconCard from './atoms/IconCard'
import ImgBienvenidaAdmin from './atoms/ImgBienvenidaAdmin'
import Rol from './atoms/Rol'
import Search from './atoms/Search'
import TitleAddEstudiante from './atoms/TitleAddEstudiante'
import TitlePage from './atoms/TitlePage'
import XCloseBtn from './atoms/XCloseBtn'


const Prueba = () => {
  return (
    <div>
        <IconCard/>
        <CardInfo/>
        <Search/>
        <ButtonEscuela/>
        <Rol/>
        <TitlePage/>
        <ButtonIconText/>
        <ImgBienvenidaAdmin/>
        <XCloseBtn/>
        <TitleAddEstudiante/>
        <BtnEditTable/>
    </div>
  )
}

export default Prueba