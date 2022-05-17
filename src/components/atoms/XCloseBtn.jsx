import React from "react";
import { Icon } from "@iconify/react";

const XCloseBtn = () => {
  return (
    <button
      type="button"
      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    >
      <Icon icon="bx:x" style="color:black;"/>
    </button>
  );
};

export default XCloseBtn;
