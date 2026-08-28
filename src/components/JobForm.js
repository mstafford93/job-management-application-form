import React, { useState, useEffect } from 'react';
import JobColumn from './JobColumn';
import Completed from '../images/completed.png';
import InProgress from '../images/in-progress.png';
import Failed from '../images/failed.png'
import "./AppForm.css"
import FormButtons from './FormButtons';

const JobForm = () => {
    const prevJobs = localStorage.getItem("tasks")
    const initialJobs = prevJobs ? JSON.parse(prevJobs) : [] //Set before useState hook

    const [listItems, setListItems] = useState(initialJobs)
    const [addItem, setAddItem] = useState({ id: 0, job: "", status: "", category: [] })
    const [toggleSwitch, setToggleSwitch] = useState(false)
    const [jobId, setJobId] = useState(1)


    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(listItems))
    }, [listItems])




    const handleToggleMode = () => {
        let body = document.body.classList
        setToggleSwitch(!toggleSwitch)
        if (toggleSwitch === true) {
            body.add("lightMode")
        } else {
            body.remove("lightMode")
        }
    }

    const handleNewItem = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setAddItem(initial => {
            return { ...initial, [name]: value }
        })
    }
    /*
    const handleInputChangeJob = (event) => {
        setAddItem({ ...addItem, job: event.target.value })
    }

    const handleInputChangeStatus = (event) => {
        setAddItem({ ...addItem, status: event.target.value })
    }
     */

    const addItemToList = (event) => {
        event.preventDefault()
        if (addItem.status === "" || addItem.job === "") {
            return alert("Please Enter Job and Status")
        }
        setJobId(jobId + 1)
        setAddItem({ ...addItem, id: jobId })
        setListItems(prevState => [...prevState, addItem])
        setAddItem({ id: jobId, job: "", status: "", category: [] })
        //console.log(addItem)
    }

    const handleRemove = (id) => {
        setListItems(prevState => prevState.filter(task => task.id !== id))
        //console.log(listItems)

    }
    const selectCategory = (event) => {
        if (addItem.category.some(item => item === event)) {
            const filterCategory = addItem.category.filter(item => item !== event)
            setAddItem(prevState => {
                return { ...prevState, category: filterCategory }
            })
        } else {
            setAddItem(prevState => {
                return { ...prevState, category: [...prevState.category, event] }
            })
        }
    }

    const selectedButton = (value) => {
        return addItem.category.some(item => item === value)
    }
    console.log(addItem.category)

    //console.log(selectedButton("Minor"))

    const clearAllJobs = () => {
        setListItems([]);
        localStorage.removeItem('tasks');
    };

    return (
        <>
            <button className='darkmode-toggle' onClick={handleToggleMode}>Dark Mode Toggle</button>
            <button onClick={clearAllJobs}>Clear All Jobs</button>
            <div className="form-header">
                <form>
                    <div className='botInput'>
                        <input
                            name='job'
                            type="text"
                            className="bot-input"
                            placeholder="Enter the job"
                            onChange={handleNewItem}
                            value={addItem.job}
                        />
                        <div className='select'>
                            <select name="status" className="job-status" onChange={handleNewItem} value={addItem.status}>
                                <option value="" disabled>Status</option>
                                <option value="Starting">Starting</option>
                                <option value="In-Progress">In-Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                        <button type="submit" className="submit-data" onClick={addItemToList}>Add Job</button>
                    </div>
                    <div className="form-details">
                        <div className="bottom-line">
                            <FormButtons value="Minor" selectCategory={selectCategory} selected={selectedButton("Minor")} />
                            <FormButtons value="Moderate" selectCategory={selectCategory} selected={selectedButton("Moderate")} />
                            <FormButtons value="Important" selectCategory={selectCategory} selected={selectedButton("Important")} />
                        </div>
                    </div>
                </form>
            </div>
            <div className='columnSection'>
                <JobColumn value="Starting" image={Failed} newClass="singleSection needToStart" tasks={listItems} handleRemove={handleRemove} />
                <JobColumn value="In-Progress" image={InProgress} newClass="singleSection inProgress" tasks={listItems} handleRemove={handleRemove} />
                <JobColumn value="Completed" image={Completed} newClass="singleSection completed" tasks={listItems} handleRemove={handleRemove} />
            </div>
        </>
    );
};

export default JobForm;