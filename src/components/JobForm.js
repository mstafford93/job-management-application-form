import React from 'react';
const JobForm = () => {
    return (
        <div className="form-header">
            <form>
                <div className='botInput'>
                    <input
                        type="text"
                        className="bot-input"
                        placeholder="Enter the job"
                    />
                    <div className='select'>
                    <select className="job-status">
                        <option value="start">Start Process</option>
                        <option value="running">Running</option>
                        <option value="completed">Completed</option>
                        <option value="stopped">Stopped</option>
                    </select>
                </div>
                    <button type="submit" className="submit-data">Add Job</button>
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
    );
};

export default JobForm;