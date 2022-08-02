import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, getUserRoutines } from "../api";

const MyRoutines = () => {
  const [routine, setRoutine] = useState([]);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    newRoutine(event);
  };

  return (
    <div>
        <div>
        <h3 id="create-routine-title">Create New Routine</h3>
          <form onSubmit={handleSubmit} className="routineForm">
            <input id="name" placeholder="Name" />
            <input id="goal" placeholder="Goal" />
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
    </div>
  )

}

export default MyRoutines