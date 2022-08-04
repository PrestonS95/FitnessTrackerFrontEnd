import React, { useState, useEffect } from "react";
import { getAllActivities, AddActivityToRoutine } from "../api";

const AddActivities = ({activities, setActivities}) => {
    const [activity, setActivity] = useState('activities')


    // const activityIds  = async () => {
    //     const activityData = await getAllActivities()
    //     console.log(activityData, 'HERE')
    //   };

    useEffect(() => {
        try{
            Promise.all([getAllActivities()])
            .then(([activities]) => {
                setActivities(activities)
                console.log(activities, 'activities on addactivity')
                // console.log(activityId, 'something')
            })
        } catch(error){
            throw error
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event, 'hiiii')
        let routineId = event.target.id
        // console.log(routineId)
        console.log(activity, 'activity')
        await AddActivityToRoutine(event, routineId);
        // window.location.reload(true);
      };

    return (
        
        <div>
            <fieldset>
            {/* <label htmlFor="select-classification">Activities <span className="activities-count">({ activities.length })</span></label> */}
            <select 
            name="Activity"
            id="select-activity"
            value={activity} 
            onChange={(event)=>{

            console.log(event, "I AM THE SET ACTIVITY EVENT")
            console.log(event.target, 'hello')
            // console.log(event.select.selectedIndex)
            setActivity(event.target.value)
            }}>
            <option value="any">Choose Activity...</option>
            {activities.map((activity, idx) =>
            <option value = {activity.id} key={idx}>{activity.name}</option>)}
            </select>
            {/* <div>
                {activities.map((activity, index) => {
                    console.log(activity.id, 'hereeeeeee')
                    return (
                        <div>
                            <h1>hello</h1>
                        </div>
                    )
                })}
            </div> */}
            
            {activity === activity && activity !== 'any' && 
            <div>
                <form id={`${activity.id}`} onSubmit={handleSubmit}>
                <input id="count" placeholder="Count" />
                <input id="duration" placeholder="Duration" />
                <button type="Submit" onClick={() => {
                // window.location.reload(true);
              }}>Add to Routine</button>
              </form>
            </div>}
            
            </fieldset>
        </div>
    )
    
}


export default AddActivities