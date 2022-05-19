import React from "react";
import { CardsInfo } from "../molecules";

const CardsInfoGeneral = () => {
  return (
    <div className="font-Roboto font-bold">
      <h2>Informe General Programate</h2>
    <div className="flex py-5 justify-between">
      <div className="bg-PrimarioColor1">
        <CardsInfo/>
      </div>
      <div className="bg-PrimarioColor4">
        <CardsInfo />
      </div>
      <div className='bg-PrimarioColor1'>
        <CardsInfo />
      </div>
      <div className="bg-PrimarioColor4">
        <CardsInfo />
      </div>
    </div>
    </div>
  );
};

export default CardsInfoGeneral;
