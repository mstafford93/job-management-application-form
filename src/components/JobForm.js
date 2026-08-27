import React, { useState } from 'react';
import JobColumn from './JobColumn';
import Completed from '../images/completed.png';
import InProgress from '../images/in-progress.png';
import Failed from '../images/failed.png'
import "./AppForm.css"
import JobItem from './JobItem';
import FormButtons from './FormButtons';

const JobForm = () => {
    const [listItems, setListItems] = useState([])
    const [addItem, setAddItem] = useState({ id: 0, job: "", status: "", category: [] })
    const [toggleSwitch, setToggleSwitch] = useState(false)
    const [needToStart, setNeedToStart] = useState([])
    const [inProgress, setInProgress] = useState([])
    const [completed, setCompleted] = useState([])
    const [jobId, setJobId] = useState(1)




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
            return {...initial, [name]: value}
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
        if(addItem.status === "" || addItem.job === ""){
            return alert ("Please Enter Job and Status")
        }
        setJobId(jobId + 1)
        setAddItem({...addItem, id:jobId})
        if(addItem.status === "Need To Start"){
            setNeedToStart([...needToStart, addItem])
        } else if (addItem.status === "In-Progress"){
            setInProgress([...inProgress, addItem])
        } else if (addItem.status === "Completed"){
            setCompleted([...completed, addItem])
        } else {
            alert ("Unknown status")
        }
            setListItems([...listItems, addItem])
            setAddItem({id:jobId, job: "", status: "" })
            //console.log(addItem)
        }

        const handleRemove = (id) => {
        setNeedToStart(needToStart.filter(task => task.id !== id))
        setCompleted(completed.filter(task => task.id !== id))
        setInProgress(inProgress.filter(task => task.id !== id))
        setListItems(listItems.filter(task => task.id !== id))
        //console.log(listItems)

    }
        const selectCategory = (event) => {
            if(addItem.category.some(item => item === event)){
                const filterCategory = addItem.category.filter(item => item !== event)
                setAddItem(prevState => {
                return {...prevState, category: filterCategory}
            })
            } else {
                setAddItem(prevState => {
                    return {...prevState, category:[...prevState.category, event]}
                })
            }
        }

        const selectedButton = (value) => {
           if(addItem.category.some(item => item === value)){
            return ({
                backgroundColor: "green",
            })
           }
        }
        console.log(addItem.category)

    return (
        <>
            <button className='darkmode-toggle' onClick={handleToggleMode}>Dark Mode Toggle</button>
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
                                <option value="Need To Start">Need To Start</option>
                                <option value="In-Progress">In-Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                        <button type="submit" className="submit-data" onClick={addItemToList}>Add Job</button>
                    </div>
                    <div className="form-details">
                        <div className="bottom-line">
                            <FormButtons value="Minor" selectCategory={selectCategory} selectedButton={selectedButton}/>
                            <FormButtons value="Moderate" selectCategory={selectCategory} selectedButton={selectedButton}/>
                            <FormButtons value="Important" selectCategory={selectCategory} selectedButton={selectedButton}/>
                        </div>
                    </div>
                </form>
            </div>
            <div className='columnSection'>
                <JobColumn value="Need to Start" image={Failed} newClass = "singleSection needToStart"> 
                    {needToStart.map((task) => <JobItem key={task.id} task={task}  handleRemove={handleRemove}/>)}
                </JobColumn>
                <JobColumn value="In Progress" image={InProgress} newClass = "singleSection inProgress">
                    {inProgress.map((task) => <JobItem key={task.id} task={task} handleRemove={handleRemove}/>)}
                </JobColumn>
                <JobColumn value="Completed" image={Completed} newClass = "singleSection completed">
                    {completed.map((task) => <JobItem key={task.id} task={task} handleRemove={handleRemove}/>)}
                </JobColumn>
            </div>
        </>
    );
};

export default JobForm;