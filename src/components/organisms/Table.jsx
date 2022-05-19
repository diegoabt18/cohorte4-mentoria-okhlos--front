import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectDataExcel } from '../../redux/slices/loadDataSlice';
import {ButtonTable}  from '../atoms/'

const Table = () => {
    const data = useSelector(selectDataExcel);

    console.log(data)

    return (
        <div className="overflow-x-auto font-GilroyLight">
            <table className="table table-zebra table-compact w-full ">
                <thead className='font-Roboto'>
                    <tr >
                        {data.file ?
                            data.columnas[0].map((c, index) => (
                                <th className='bg-PrimarioColor2 text-black font-extrabold' key={index}>{c}</th>
                            ))
                            : <th>No hay</th>}
                        
                        {data.file? <th className='bg-PrimarioColor2 text-black font-extrabold'>acciones</th>:null}
                    </tr>
                </thead>
                <tbody>
                    {data.file ?

                        data.data.map((r, i) => (
                            <tr className='hover' key={i}>
                                {data.columnas[0].map((c, index) => (
                                    <td key={index}>{r[index]}</td>
                                ))}
                                <td className='flex gap-2'>
                                    <ButtonTable icon={"eva:edit-2-outline"} color={"text-PrimarioColor2"}/>
                                    <ButtonTable icon={"fluent:delete-48-regular"} color={"text-red-500"} />
                                </td>
                            </tr>
                        ))

                        : <tr>
                            <td>no hay</td>
                        </tr>
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Table