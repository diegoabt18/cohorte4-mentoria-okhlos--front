import React from 'react'
import BasicButtonIcon from './atoms/BasicButtonIcon'
import PhotoProfile from './atoms/PhotoProfile'
import PersonName from './atoms/PersonName'
import LogoMenuSidebar from './atoms/LogoMenuSidebar'
import LogoFooter from './atoms/LogoFooter'
import Swal from 'sweetalert'
import { ModalAlert } from './organisms/ModalAlert'
import BasicComboBox from './atoms/BasicComboBox'
import MultiComboBox from './atoms/MultiComboBox'
import CloseModalButtonIcon from './atoms/CloseModalButtonIcon'
import InputDate from './atoms/InputDate'
const Prueba = () => {
  
  return (
    <div>
        <BasicButtonIcon />
        <PhotoProfile />
        <PersonName />
        <LogoMenuSidebar />
        <LogoFooter />
        <BasicComboBox />
        <MultiComboBox />
        <CloseModalButtonIcon />
        <InputDate />
          <br />
          <br />
          <br />
          <br />
    </div>
  )
}

export default Prueba