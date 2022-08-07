import React, { useState, useEffect } from "react";
import { getUser, getUserRoutines } from "../api";

const PublicRoutines = () => {
  const [routine, setRoutine] = useState([]);

  let token = localStorage.getItem("token");

  const getMyInfo = async () => {
    const username = await getUser(token);
    const userData = await getUserRoutines(username.username, token);
    setRoutine(userData);
  };
  useEffect(() => {
    getMyInfo();
  }, []);

  return (
    <div className="public-routines">
      {routine.map((routine, index) => {
        console.log(routine, "does this even work right now");
        return (
          <div className="publicroutines" key={index}>
            {routine.isPublic ? <p>‣ {routine.name}</p> : null}
          </div>
        );
      })}
    </div>
  );
};

export default PublicRoutines;
