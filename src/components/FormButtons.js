import React from 'react'

const FormButtons = ({value, selectCatagory}) => {
  return (
    <button type='button' onClick={() => selectCatagory(value)}>{value}</button>
  )
}

export default FormButtons
