import React from 'react'

const JobItem = ({task, handleRemove}) => {


  return (
                <li className='li-item'>
                    <span>{task.id}: {task.job}</span><span>Status: {task.status}</span><button onClick={() => handleRemove(task.id)}>Delete</button>
                </li>
  )
}

export default JobItem
