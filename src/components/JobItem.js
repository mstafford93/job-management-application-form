import React from 'react'
import FormButtons from './FormButtons'

const JobItem = ({task, handleRemove, category}) => {


  return (
                <li className='li-item'>
                    <span>{task.id}: {task.job}</span>
                    {
                      category.map((cat, index) => <FormButtons key={index} value={cat} /> )
                    }
                    <button onClick={() => handleRemove(task.id)}>Delete</button>
                </li>
  )
}

export default JobItem
