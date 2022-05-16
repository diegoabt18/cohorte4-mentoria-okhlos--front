import React from 'react'

const ButtonBasic = ({text}) => {
  return (
    <button type="button" class="focus:outline-none text-white bg-color1 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">
      {text} asdas
    </button>
  )
}

export default ButtonBasic