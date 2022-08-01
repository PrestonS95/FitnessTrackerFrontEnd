import React, {useState, useEffect} from "react";
import { getAllActivities } from "../api";


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
    
    return(
        <div>
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