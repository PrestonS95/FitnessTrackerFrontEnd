import React, { useState, useEffect } from "react";
// import AddActivities from "./AddActivities";
import { getUser, getUserRoutines, createRoutine, deleteRoutine, editRoutine, AddActivityToRoutine, getAllActivities, editRoutineActivity, deleteRoutineActivity } from "../api";

const MyRoutines = () => {
  const [routine, setRoutine] = useState([]);
  const [checked, setChecked] = useState(false);
  const [editMode, setEditMode] = useState(false)
  const [activities, setActivities] = useState([])
  const [addMode, setAddMode] = useState(false)
  const [activity, setActivity] = useState('activities')
  const [editActivityMode, setEditActivityMode] = useState(false)

  const [name, setName] = useState("")
  const [goal, setGoal] = useState("")
 
  let token = localStorage.getItem("token");

  const getMyInfo = async () => {
    const username = await getUser(token)
    // console.log(username, 'username MyRoutines')
    const userData = await getUserRoutines(username.username, token);
    console.log(userData, 'userData')
    setRoutine(userData);
  };
  useEffect(() => {
    getMyInfo();
  }, []);

  const handleChange = () => {
    setChecked(!checked);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await createRoutine(event);
    window.location.reload(true);
  };

  
  const handleEdit = async (event) => {
    event.preventDefault();
    let routineId = event.target.id
    await editRoutine(event, routineId);
    // window.location.reload(true);
  };

   const handleEditActivity = async (event) => {
    event.preventDefault();
    let routineActivityId = event.target.id
    console.log(routineActivityId)
    await editRoutineActivity(event, routineActivityId);
    window.location.reload(true);
  };

  useEffect(() => {
    try{
        Promise.all([getAllActivities()])
        .then(([activities]) => {
            setActivities(activities)
            console.log(activities, 'activities on addactivity')
        })
    } catch(error){
        throw error
    }
}, [])

const handleAdding = async (event) => {
  event.preventDefault();
  let routineId = event.target.className
  await AddActivityToRoutine(event, routineId);
  window.location.reload(true);
};

  return (
    <div>
        <div>
        <h3 id="create-routine-title">Create New Routine</h3>
          <form onSubmit={handleSubmit} className="routineForm">
            <input id="name" placeholder="Name" />
            <input id="goal" placeholder="Goal" />
            <label>
              Public?
              <input
                id="deliver"
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                placeholder="Public"
              />
            </label>
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
        <div className="all-routines">
        {routine.map((routine, index) => {
          console.log(routine, 'routine in myRoutines')
            return (
                <div className="routines" key={index}>
                    <div id='edit-button'>
                    <button
                      id="edit-routine-button"
                      type="button"
                      onClick={() => {
                        setEditMode(true)
                      }}>
                        Edit Routine</button>
                        {editMode && (`${routine.id}` === index) ? 
                        (<form id={`${routine.id}`} onSubmit={handleEdit} className="editRoutineForm">
                              <input id="name" placeholder={`Name: ${routine.name}`} defaultValue={routine.name}/>
                              <input id="goal" placeholder={`Goal: ${routine.goal}`} defaultValue={routine.goal}/>
                              <label>
                                Public?
                                <input
                                  id="deliver"
                                  type="checkbox"
                                  checked={checked}
                                  onChange={handleChange}
                                  placeholder="Public"
                                />
                              </label>
                              <button
                                id="edit-routine-submit"
                                type="Submit"
                                onClick={() => {
                                  // window.location.reload(true);
                                }}
                              >
                                Update
                              </button>
                            </form>) 
                            : null}
                        </div>
                    <div id='delete-button'>
                    <button
                      id="delete-routine-button"
                      onClick={async() => {
                        const token = localStorage.getItem("token");
                        await deleteRoutine(token, routine.id);
                        window.location.reload(true)
                      }}
                    >
                      Delete Routine
                    </button>
                  </div>
                  <div id='add-activity-button'>
                    <button
                      id="add-activity-submit"
                      type="button"
                      onClick={() => {
                        setAddMode(true)
                      }}>
                        Add Activity</button>
                        {addMode ? 
                        (<div>
                          <fieldset>
                            <select 
                            name="Activity"
                            // id="select-activity"
                            value={activity} 
                            onChange={(event)=>{

                            console.log(event, "I AM THE SET ACTIVITY EVENT")
                            setActivity(event.target.value)
                            
                            }}>
                            <option value="any">Choose Activity...</option>
                         
                            {activities.map((activity, idx) =>
                            <option value = {activity.id} key={idx}>{activity.name}</option>
                            )}
                            </select>
                            
                            {activity === (activity !== 'any' && activity) && 
                              <div>
                                  <form className={`${routine.id}`} id={`${activity}`} onSubmit={handleAdding}>
                                  <input id="count" placeholder="Count" />
                                  <input id="duration" placeholder="Duration" />
                                  <button type="Submit" onClick={() => {
                                }}>Add to Routine</button>
                                </form>
                              </div>}
                            </fieldset>
                        </div>) 
                            : null}
                        </div>
                    <p>name: {routine.name}</p>
                    <p>goal: {routine.goal}</p>
                    <p>creator: {routine.creatorName}</p>
                    <p>activities</p>
                     {routine.activities.map((activity, index) => {
                        return (
                            <div className="routine-activities" key={index}>
                                <p>name: {activity.name}</p>
                                <p>description: {activity.description}</p>
                                <p>count: {activity.count}</p>
                                <p>duration: {activity.duration}</p>
                                <div>
                                  <button id="edit-activity-button" type="button"
                                  onClick={() => {
                                  setEditActivityMode(true)
                                  }}>Edit Activity
                                  </button>
                                  {editActivityMode ? 
                                    (<form id={activity.routineActivityId} onSubmit={handleEditActivity} className="editRoutineForm">
                                          <input id="count" placeholder={`Count: ${activity.count}`} defaultValue={activity.count}/>
                                          
                                          <input id="duration" placeholder={`Duration: ${activity.duration}`} defaultValue={activity.duration}/>
                                          <button
                                            id="edit-routine_activities-submit"
                                            type="Submit"
                                            onClick={() => {
                                              // window.location.reload(true);
                                            }}
                                          >
                                            Update Activity
                                          </button>
                                        </form>) 
                                        : null}
                                    </div>
                                      <div id='delete-routine_activity-button'>
                                          <button
                                            id="delete-routine_activities-button"
                                            onClick={async(e) => {
                                              const token = localStorage.getItem("token");
                                              await deleteRoutineActivity(token, activity.routineActivityId)
                                              console.log(e)
                                              window.location.reload(true)
                                            }}
                                          >Delete Routine</button>
                                    </div>
                                </div>
                        )
                    })}
                    </div>
            )
        })}
        </div>
    </div>
  )

}

export default MyRoutines

