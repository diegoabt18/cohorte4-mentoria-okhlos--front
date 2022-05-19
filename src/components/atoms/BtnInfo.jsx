import React from "react";
import { Icon } from "@iconify/react";

const BtnInfo = () => {
  return (
    
      <button
        type="button"
        className="text-white bg-SecondarioColor3 font-medium font-GilroyLight text-sm  py-2.5 text-center items-center w-full"
      >
        Mas información
        <Icon icon= "bi:arrow-right-circle-fill" style={{display:'inline', color:'black', marginLeft:'0.5rem' }}/>
        
      </button>
    
  );
};

export default BtnInfo;
