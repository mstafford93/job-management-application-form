import React, { useState } from 'react';
import JobItem from './JobItem';
import "./AppForm.css"

const JobForm = () => {
    const [listItems, setListItems] = useState([])
    const [addItem, SetAddItem] = useState({ job: "", status: "" })
    const [toggleSwitch, setToggleSwitch] = useState(false)

    const handleToggleMode = () => {
        let body = document.body.classList
        setToggleSwitch(!toggleSwitch)
        if (toggleSwitch === true){
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
        if(addItem.job === "") {
            alert("Please enter job")
        } else {
        setListItems([...listItems, addItem])
        SetAddItem({ job: "", status: "" })
        //console.log(listItems)
        }
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
                            <option value="Start">Start Process</option>
                            <option value="Running">Running</option>
                            <option value="Completed">Completed</option>
                            <option value="Stopped">Stopped</option>
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
        <div>
                <ul>
                    {listItems.map((task, index) => <JobItem key={index} task={task} />)}
                </ul>
            </div>
        </>
    );
};

export default JobForm;