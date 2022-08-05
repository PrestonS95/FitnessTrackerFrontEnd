import React, {useState, useEffect} from "react";
import { createActivity, getAllActivities } from "../api";


const Activities = () =>{
    const [activity, setActivity] = useState([])
    const [createNew, setCreateNew] = useState(false)
   
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
            <div className="create-new-activity">
                <button 
                    id="create-new-activity-button"
                    onClick={()=>{
                    setCreateNew(true)}}>
                    <span class="material-icons">post_add</span>
                    Create New Activity
                </button>
                {createNew ? <form onSubmit={handleSubmit} className="activityForm">
                    <input id="create-name" placeholder="Name" />
                    <input id="create-description" placeholder="Description" />
                    <button
                    id="new-routine-submit"
                    type="Submit" 
                    onClick={() => {
                        // window.location.reload(true);
                    }}
                    >
                    Create
                    </button>
                </form> : null}
            </div>
            : null }
            </>
            <div className="all-activities">
            {activity.map((activity, index) => {
                return (
                    <div className="activities" key={index}>
                        <p>name: {activity.name}</p>
                        <p>description: {activity.description}</p>
                    </div>
                )
            })}
            </div>
       </div>
)}

export default Activities