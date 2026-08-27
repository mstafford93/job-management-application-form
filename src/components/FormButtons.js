import React from 'react'

const FormButtons = ({value, selectCategory, selected}) => {
  const addCSSToButton = {
    Minor: {backgroundColor: "#f5bc52"},
    Moderate: {backgroundColor: "#26a030"},
    Important: {backgroundColor: "#f5332c"}
  }

  

  return (
    <button className={value} style={selected ? addCSSToButton[value] : value.default} type='button' 
    onClick={() => selectCategory(value)}>{value}</button>
  )
}

export default FormButtons
