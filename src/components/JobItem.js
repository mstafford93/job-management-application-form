import React from 'react'

const JobItem = ({task}) => {


  return (
                <li className='li-item'>
                    <span>Job Name: {task.job}</span><span>Status: {task.status}</span>
                </li>
  )
}

export default JobItem
