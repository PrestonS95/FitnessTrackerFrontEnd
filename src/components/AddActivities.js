import React, { useState, useEffect } from "react";
import { getAllActivities, AddActivityToRoutine } from "../api";

const AddActivities = ({ routine }) => {
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState("activities");

  useEffect(() => {
    try {
      Promise.all([getAllActivities()]).then(([activities]) => {
        setActivities(activities);
        console.log(activities, "activities on addactivity");
      });
    } catch (error) {
      throw error;
    }
  }, []);

  const handleAdding = async (event) => {
    event.preventDefault();
    let routineId = event.target.className;
    await AddActivityToRoutine(event, routineId);
    window.location.reload(true);
  };

  return (
    <div id="add-activity-form">
      <fieldset id="add-activity-fieldset">
        <select
          name="Activity"
          // id="select-activity"
          value={activity}
          onChange={(event) => {
            // console.log(event, "I AM THE SET ACTIVITY EVENT")
            setActivity(event.target.value);
          }}
        >
          <option value="any">Choose Activity...</option>

          {activities.map((activity, idx) => (
            <option value={activity.id} key={idx}>
              {activity.name}
            </option>
          ))}
        </select>

        {activity === (activity !== "any" && activity) && (
          <div id="add-rouitneactivity-form">
            <form
              className={`${routine.id}`}
              id={`${activity}`}
              onSubmit={handleAdding}
            >
              <input id="count" placeholder="Count" />
              <input id="duration" placeholder="Duration" />
              <button id="add-button" type="Submit" onClick={() => {}}>
                Add to Routine
              </button>
            </form>
          </div>
        )}
      </fieldset>
    </div>
  );
};

export default AddActivities;
