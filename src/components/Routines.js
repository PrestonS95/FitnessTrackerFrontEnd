import React, {useState, useEffect} from "react";
import { getPublicRoutine } from "../api";


const Routines = () =>{
    const [routine, setRoutine] = useState([])
   
       const getRoutines = async() => {
        const routine = await getPublicRoutine()
        console.log(routine, 'here')
        setRoutine(routine)
    }
    useEffect(() => {
        getRoutines() 
    }, [])
    
    return(
        <div>
            {routine.map((routine, index) => {
                return (
                    <div key={index}>
                        <p>name: {routine.name}</p>
                        <p>description: {activity.description}</p>
                    </div>
                )
            })}
       </div>
)}

export default Routines