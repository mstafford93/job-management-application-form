import React from 'react'

const JobItem = ({task}) => {


  return (
                <li className='li-item'>
                    <span>{task.id}: {task.job}</span><span>Status: {task.status}</span><button>Delete</button>
                </li>
  )
}

export default JobItem
