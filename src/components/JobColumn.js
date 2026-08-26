import React from 'react'
import './JobColumn.css'

const JobColumn = ({value, image, newClass, children}) => {
  return (
    <section className={newClass}>
        <h2>{value}</h2>
        <img src={image} alt="Task Icon" className='sectionImage'/>
        {children}
    </section>
  )
}

export default JobColumn
