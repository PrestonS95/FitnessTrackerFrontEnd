import React, { useState, useEffect } from "react";
import {
  getUser,
  getUserRoutines,
  createRoutine,
  deleteRoutine,
  deleteRoutineActivity,
} from "../api";
import AddActivities from "./AddActivities";
import EditActivity from "./EditActivity";
import EditRoutines from "./EditRoutine";
import PrivateRoutines from "./PrivateRoutines";
import PublicRoutines from "./PublicRoutines";

const MyRoutines = () => {
  const [routine, setRoutine] = useState([]);
  const [checked, setChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const [editActivityMode, setEditActivityMode] = useState(false);
  const [createNew, setCreateNew] = useState(false);
  const [publicShown, setPublicShown] = useState(false);
  const [privateShown, setPrivateShown] = useState(false);

  let token = localStorage.getItem("token");

  const getMyInfo = async () => {
    const username = await getUser(token);
    const userData = await getUserRoutines(username.username, token);
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

  return (
    <div>
      <div id="new-routine-form-button">
        <button
          id="create-new-routine-button"
          onClick={() => {
            setCreateNew(true);
          }}
        >
          <span class="material-icons">post_add</span>
          Create New Routine
        </button>
        {createNew ? (
          <form onSubmit={handleSubmit} className="routineForm">
            <input className="create-name" id="name" placeholder="Name" />
            <input className="create-goal" id="goal" placeholder="Goal" />
            <label>
              Make Public
              <input
                id="deliver"
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                placeholder="Public"
              />
            </label>
            <button id="new-routine-submit" type="Submit" onClick={() => {}}>
              Create
            </button>
          </form>
        ) : null}

        <button
          id="public-routines-button"
          onClick={() => {
            setPublicShown(true);
          }}
        >
          <span class="material-icons">public</span>
          My Public Routines
        </button>
        {publicShown && <PublicRoutines />}
        <button
          id="private-routines-button"
          onClick={() => {
            setPrivateShown(true);
          }}
        >
          <span class="material-icons">lock</span>
          My Private Routines
        </button>
        {privateShown && <PrivateRoutines />}
      </div>

      <div className="all-routines">
        {routine.map((routine, index) => {
          return (
            <div className="routines" key={index}>
              <div id="buttons-div">

              <div id="delete-button">
                  <button
                    id="delete-routine-button"
                    onClick={async () => {
                      const token = localStorage.getItem("token");
                      await deleteRoutine(token, routine.id);
                      window.location.reload(true);
                    }}
                  >
                    <span class="material-icons">delete</span>
                  </button>
                </div>

                <div id="edit-button">
                  <button
                    id="edit-routine-button"
                    type="button"
                    className={routine.id}
                    onClick={(event) => {
                      setEditMode(true);
                    }}
                  >
                    <span class="material-icons" id={routine.id}>
                      edit
                    </span>
                  </button>

                  {editMode && <EditRoutines routine={routine} />}
                </div>

                <div id="add-activity-button">
                  <button
                    id="add-activity-submit"
                    type="button"
                    onClick={() => {
                      setAddMode(true);
                    }}
                  >
                    <span class="material-icons">add</span>
                  </button>
                  {addMode && <AddActivities routine={routine} />}
                </div>

              </div>
              <p className="routine-name">{routine.name}</p>
              <p className="routine-goal">Goal: {routine.goal}</p>

              {routine.activities.map((activity, index) => {
                return (
                  <div className="routine-activities" key={index}>
                    <div id="activities-on-routines">
                      <p className="activity-name">{activity.name}</p>
                      <p className="activity-description">
                        {activity.description}
                      </p>
                      <p className="activity-count">count: {activity.count}</p>
                      <p className="activity-duration">
                        duration: {activity.duration}
                      </p>
                    </div>
                    <div id="activity-buttons-div">
                      <div>
                        <button
                          id="edit-activity-button"
                          type="button"
                          onClick={() => {
                            setEditActivityMode(true);
                          }}
                        >
                          <span class="material-icons">edit</span>
                        </button>
                        {editActivityMode && (
                          <EditActivity activity={activity} />
                        )}
                      </div>
                      <div id="delete-routine_activity-button">
                        <button
                          id="delete-routine_activities-button"
                          onClick={async (e) => {
                            const token = localStorage.getItem("token");
                            await deleteRoutineActivity(
                              token,
                              activity.routineActivityId
                            );
                            console.log(e);
                            window.location.reload(true);
                          }}
                        >
                          <span class="material-icons">clear</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyRoutines;
