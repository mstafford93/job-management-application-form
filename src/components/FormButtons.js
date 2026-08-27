import React from 'react'

const FormButtons = ({value, selectCategory, selectedButton}) => {
  return (
    <button className={value} style={selectedButton(value)} type='button' onClick={() => selectCategory(value)}>{value}</button>
  )
}

export default FormButtons
