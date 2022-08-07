import React, { useState } from "react";
import { editRoutine } from "../api";

const EditRoutines = ({ routine }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleEdit = async (event) => {
    event.preventDefault();
    let routineId = event.target.id;
    await editRoutine(event, routineId);
    // window.location.reload(true);
  };

  return (
    <div>
      <form
        id={`${routine.id}`}
        onSubmit={handleEdit}
        className="editRoutineForm"
      >
        <input
          id="name"
          placeholder={`Name: ${routine.name}`}
          defaultValue={routine.name}
        />
        <input
          id="goal"
          placeholder={`Goal: ${routine.goal}`}
          defaultValue={routine.goal}
        />
        <div className = "checkbox">
          <input
            id="public-or-private"
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            placeholder="Public"
          />
          {/* {routine.isPublic ? <div><p>(leave unchecked for private)</p></div> : <div><p>(click make routine public)</p></div>} */}
          {checked ? <div><p>Public</p></div> : <div><p>Private</p></div>}
        </div>
        <button
          id="edit-routine-submit"
          type="Submit"
          onClick={() => {
            // window.location.reload(true);
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditRoutines;
