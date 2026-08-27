import React from 'react'

const FormButtons = ({value, selectCategory, selected}) => {
  const addCSSToButton = {
    Minor: {backgroundColor: "green"},
    Moderate: {backgroundColor: "orange"},
    Important: {backgroundColor: "red"}
  }

  

  return (
    <button className={value} style={selected ? addCSSToButton[value] : value.default} type='button' 
    onClick={() => selectCategory(value)}>{value}</button>
  )
}

export default FormButtons
