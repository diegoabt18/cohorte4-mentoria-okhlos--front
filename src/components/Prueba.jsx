import React from 'react';
import {Login} from './molecules/Index';
import { CardsInfo } from './molecules/Index';
import { DataStudent } from './molecules/Index';
import { ComboBoxPreferStudent } from './molecules/Index';
import { AddStudent } from './molecules/Index';
import { ItemMenu } from './molecules/Index';
import {AdminWithName} from './molecules/Index'
import {HomeOnly} from './molecules/Index'
import {Welcome} from './organisms/Index';
import {CardsInfoGeneral} from './organisms/Index'

const Prueba = () => {
  
  return (
    <div >
    <Login/>
    <CardsInfo/>
    <DataStudent/>
    <ComboBoxPreferStudent/>
    <AddStudent/>
    <ItemMenu/>
    <AdminWithName/>
    <HomeOnly/>
    <Welcome/>
    <CardsInfoGeneral/>
    </div>
  )
}

export default Prueba