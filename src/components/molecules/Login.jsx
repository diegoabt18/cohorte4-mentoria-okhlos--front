import React from 'react'
import {BasicButton, BasicInputText, LinkForgetPassword, LogoEducamas,} from '../atoms'

const Login = () => {
  return (
    <div className='flex gap-y-5 items-center justify-center flex-col w-full'>
        <LogoEducamas/>
        <h2 className='font-Roboto text-PrimarioColor1 mt-10' >Bienvenido a OKHLOS</h2>
        <div className='flex flex-col gap-y-1'>
        <BasicInputText/>
        <BasicInputText/>
        </div>
        <BasicButton/>
        <LinkForgetPassword/>
    </div>
  )
}

export default Login