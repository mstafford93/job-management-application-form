import React from 'react'

const FormButtons = ({value, selectCategory, selectedButton}) => {
  return (
    <button type='button' onClick={() => {selectCategory(value); selectedButton(value)}}>{value}</button>
  )
}

export default FormButtons
