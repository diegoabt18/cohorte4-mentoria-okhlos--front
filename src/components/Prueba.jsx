import React from 'react';
import {Login} from './molecules/Index';
import {BienvenidaOkhlos} from './molecules/Index'
import {DashboardOptions} from './molecules/Index'
import { CardsInfo } from './molecules/Index';
import { DataStudent } from './molecules/Index';
import { ComboBoxPreferStudent } from './molecules/Index';
import { AddStudent } from './molecules/Index';
import { ItemMenu } from './molecules/Index';
import {AdminWithName} from './molecules/Index'
import {HomeOnly} from './molecules/Index'

const Prueba = () => {
  
  return (
    <div >
    <Login/>
    <BienvenidaOkhlos/>
    <DashboardOptions/>
    <CardsInfo/>
    <DataStudent/>
    <ComboBoxPreferStudent/>
    <AddStudent/>
    <ItemMenu/>
    <AdminWithName/>
    <HomeOnly/>
    </div>
  )
}

export default Prueba