import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, getUserRoutines, createRoutine, deleteRoutine, editRoutine } from "../api";

const MyRoutines = () => {
  const [routine, setRoutine] = useState([]);
  const [checked, setChecked] = useState(false);
  const [editMode, setEditMode] = useState(false)

  let navigate = useNavigate();
  let token = localStorage.getItem("token");

  const getMyInfo = async () => {
    const username = await getUser(token)
    console.log(username, 'username MyRoutines')
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
    createRoutine(event);
  };

  const handleEdit = async (event) => {
    event.preventDefault();
    let routineId = event.target.id
    await editRoutine(event, routineId);
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
                window.location.reload(true);
              }}
            >
              Create
            </button>
          </form>
        </div>
        <div>
        {routine.map((routine, index) => {
          console.log(routine, 'routine in myRoutines')
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
                  <div>
                     <button
                      id="edit-routine-submit"
                      type="button"
                      onClick={() => {
                        setEditMode(true)
                      }}>
                        Edit Routine</button>
                        {editMode ? 
                        (<form id={`${routine.id}`} onSubmit={handleEdit} className="editRoutineForm">
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
                        
                    <button
                      id="delete-button"
                      onClick={() => {
                        const token = localStorage.getItem("token");
                        deleteRoutine(token, routine.id);
                        window.location.reload(true)
                      }}
                    >
                      Delete Post
                    </button>
                  </div>
                </div>
            )
        })}
        </div>
    </div>
  )

}

export default MyRoutines

