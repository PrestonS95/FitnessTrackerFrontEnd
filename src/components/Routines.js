import React, { useState, useEffect } from "react";
import { getPublicRoutine } from "../api";

const Routines = () => {
  const [routine, setRoutine] = useState([]);

  const getRoutines = async () => {
    const routines = await getPublicRoutine();
    console.log(routines, "here");
    setRoutine(routines);
  };
  useEffect(() => {
    getRoutines();
  }, []);

  return (
    <div className="all-routines">
      {routine.map((routine, index) => {
        return (
          <div className="routines-all" key={index}>
            <p className="routine-name">{routine.name}</p>
            <p className="routine-creator">creator: {routine.creatorName}</p>
            <p className="routine-goal">Goal: {routine.goal}</p>

            {routine.activities.map((activity, index) => {
              return (
                <div className="routine-activities" key={index}>
                  <p className="activity-name">{activity.name}</p>
                  <p className="activity-description">{activity.description}</p>
                  <p className="activity-count">count: {activity.count}</p>
                  <p className="activity-duration">duration: {activity.duration}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Routines;
