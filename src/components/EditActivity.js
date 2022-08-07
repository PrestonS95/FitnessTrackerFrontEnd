import React, { useState } from "react";
import { editRoutineActivity } from "../api";

const EditActivity = ({ activity }) => {
  const handleEditActivity = async (event) => {
    event.preventDefault();
    let routineActivityId = event.target.id;
    await editRoutineActivity(event, routineActivityId);
    window.location.reload(true);
  };

  return (
    <div>
      <form
        id={activity.routineActivityId}
        onSubmit={handleEditActivity}
        className="editRoutineActivityForm"
      >
        <input
          id="count"
          placeholder={`Count: ${activity.count}`}
          defaultValue={activity.count}
        />

        <input
          id="duration"
          placeholder={`Duration: ${activity.duration}`}
          defaultValue={activity.duration}
        />
        <button
          id="edit-routine_activities-submit"
          type="Submit"
          onClick={() => {
            // window.location.reload(true);
          }}
        >
          Update Activity
        </button>
      </form>
    </div>
  );
};

export default EditActivity;
