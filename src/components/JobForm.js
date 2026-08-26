import React, { useState } from 'react';
import JobColumn from './JobColumn';
import Completed from '../images/completed.png';
import InProgress from '../images/in-progress.png';
import Failed from '../images/failed.png'
import "./AppForm.css"
import JobItem from './JobItem';

const JobForm = () => {
    const [listItems, setListItems] = useState([])
    const [addItem, SetAddItem] = useState({ job: "", status: "" })
    const [toggleSwitch, setToggleSwitch] = useState(false)
    const [needToStart, setNeedToStart] = useState([])
    const [inProgress, setInProgress] = useState([])
    const [completed, setCompleted] = useState([])

    const handleToggleMode = () => {
        let body = document.body.classList
        setToggleSwitch(!toggleSwitch)
        if (toggleSwitch === true) {
            body.add("lightMode")
        } else {
            body.remove("lightMode")
        }
    }


    const handleInputChangeJob = (event) => {
        SetAddItem({ ...addItem, job: event.target.value })
    }

    const handleInputChangeStatus = (event) => {
        SetAddItem({ ...addItem, status: event.target.value })
    }

    const addItemToList = (event) => {
        event.preventDefault()
        if(addItem.status === "" || addItem.job === ""){
            return alert ("Please Enter Job and Status")
        }
            setListItems([...listItems, addItem])
            SetAddItem({ job: "", status: "" })
            //console.log(listItems)
        }


    return (
        <>
            <button className='darkmode-toggle' onClick={handleToggleMode}>Dark Mode Toggle</button>
            <div className="form-header">
                <form>
                    <div className='botInput'>
                        <input
                            type="text"
                            className="bot-input"
                            placeholder="Enter the job"
                            onChange={handleInputChangeJob}
                            value={addItem.job}
                        />
                        <div className='select'>
                            <select className="job-status" onChange={handleInputChangeStatus} value={addItem.status}>
                                <option value="" disabled>Status</option>
                                <option value="Need To Start">Need To Start</option>
                                <option value="In-Progress">In-Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                        <button type="submit" className="submit-data" onClick={addItemToList}>Add Job</button>
                    </div>
                    <div className="form-details">
                        <div className="bottom-line">
                            <button>Read Emails</button>
                            <button>Web Parsing</button>
                            <button>Send Emails</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='columnSection'>
                <JobColumn value="Need to Start" image={Failed}> 
                    {listItems.map((task, index) => <JobItem key={index} task={task}/>)}
                </JobColumn>
                <JobColumn value="In Progress" image={InProgress} />
                <JobColumn value="Completed" image={Completed} />
            </div>
        </>
    );
};

export default JobForm;