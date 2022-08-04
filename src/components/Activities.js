import React, {useState, useEffect} from "react";
import { createActivity, getAllActivities } from "../api";


const Activities = () =>{
    const [activity, setActivity] = useState([])
   
       const getActivities = async() => {
        const activity = await getAllActivities()
        console.log(activity, 'here')
        setActivity(activity)
    }
    useEffect(() => {
        getActivities() 
    }, [])
    const handleSubmit = async (event) => {
    event.preventDefault();
    await createActivity(event);
    window.location.reload(true);
  };
    
    return(
       
        <div>
        <>
        {localStorage.getItem("token") ? 
            <div>
                <h3 id="create-activity-title">Create New Activity</h3>
                <form onSubmit={handleSubmit} className="activityForm">
                    <input id="name" placeholder="Name" />
                    <input id="description" placeholder="Description" />
                    <button
                    id="new-routine-submit"
                    type="Submit" 
                    onClick={() => {
                        // window.location.reload(true);
                    }}
                    >
                    Create
                    </button>
                </form>
            </div>
            : null }
            </>
            {activity.map((activity, index) => {
                return (
                    <div className="activities" key={index}>
                        <p>name: {activity.name}</p>
                        <p>description: {activity.description}</p>
                    </div>
                )
            })}
       </div>
)}

export default Activities