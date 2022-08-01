import React, {useState, useEffect} from "react";
import { getPublicRoutine } from "../api";


const Routines = () => {
    const [routine, setRoutine] = useState([])
   
       const getRoutines = async() => {
        const routines = await getPublicRoutine()
        console.log(routines, 'here')
        setRoutine(routines)
    }
    useEffect(() => {
        getRoutines() 
    }, [])
    
   
    return(
        <div>
            {routine.map((routine, index) => {
                return (
                    <div className="routines" key={index}>
                        <p>name: {routine.name}</p>
                        <p>goal: {routine.goal}</p>
                        <p>creator: {routine.creatorName}</p>
                        <p>activities</p>
                        {routine.activities.map((activity, index) => {
                            return (
                                <div key={index}>
                                    <p>name: {activity.name}</p>
                                    <p>description: {activity.description}</p>
                                    <p>count: {activity.count}</p>
                                    <p>duration: {activity.duration}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
       </div>
)}

export default Routines