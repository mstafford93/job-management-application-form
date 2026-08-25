import React from 'react'

const JobItem = ({task}) => {

    const colorChange = (status) => {
        if(status === "Completed"){
            return {
                backgroundColor: "green",
                color: "white"
            }
        } else if (status === "Stopped") {
            return {
                backgroundColor: "red",
                color: "white"
            }
        }
        return {
            backgroundColor: "purple",
            color: "white"
        }
    }


  return (
                <li className='li-item' style={colorChange(task.status)}><span>Job Name: {task.job}</span><span>Status: {task.status}</span></li>
  )
}

export default JobItem
