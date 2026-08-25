import React, { useState } from 'react';
import JobItem from './JobItem';
const JobForm = () => {
    const [listItems, setListItems] = useState([])
    const [addItem, SetAddItem] = useState({ job: "", status: "" })


    const handleInputChangeJob = (event) => {
        SetAddItem({ ...addItem, job: event.target.value })
    }

    const handleInputChangeStatus = (event) => {
        SetAddItem({ ...addItem, status: event.target.value })
    }

    const addItemToList = (event) => {
        setListItems([...listItems, addItem])
        SetAddItem({ job: "", status: "" })
        console.log(listItems)
        event.preventDefault()
    }


    return (
        <>
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