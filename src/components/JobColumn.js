import React from 'react'
import './JobColumn.css'
import JobItem from './JobItem'

const JobColumn = ({value, image, newClass, tasks, handleRemove}) => {
  return (
    <section className={newClass}>
        <h2>{value}</h2>
        <img src={image} alt="Task Icon" className='sectionImage'/>
        {tasks.map((task) => task.status === value && <JobItem key={task.id} task={task} category={task.category} handleRemove={handleRemove}/>)}
    </section>
  )
}

export default JobColumn
