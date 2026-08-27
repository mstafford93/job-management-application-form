import React from 'react'

const FormButtons = ({value, selectCategory}) => {
  return (
    <button type='button' onClick={() => selectCategory(value)}>{value}</button>
  )
}

export default FormButtons
