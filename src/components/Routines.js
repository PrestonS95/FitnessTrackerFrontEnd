import React, {useState, useEffect} from "react";
import { getPublicRoutine } from "../api";


const Routines = () =>{
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
                  <div key={index}>
                    <p>name: {routine.creatorName}</p>
                    <p>goal: {routine.goal}</p>
                    <p>name: {routine.name}</p>
                    <p>description: {routine.activities[1].description}</p>
                  </div>
                );
            })}
       </div>
)}

export default Routines