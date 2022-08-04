const BASE = `https://agile-basin-92861.herokuapp.com/api`;;
export const URL = `${BASE}`;



export const editRoutine = async(event, routineId) => {
try{
     const token = localStorage.getItem("token");
     const newRoutineName = event.target[0].value;
     console.log(newRoutineName, "newRoutineName")
     const newRoutineGoal = event.target[1].value;
     console.log(newRoutineGoal, "newRoutineGoal")
     const newRoutinePublic = event.target[2].checked;
     console.log(newRoutinePublic, "newRoutinePublic")
     console.log(routineId, 'routineid')
     const response = await fetch(`${URL}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
          'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: `${newRoutineName}`,
        goal: `${newRoutineGoal}`,
        isPublic: newRoutinePublic}),
 })
  console.log(response, 'response')
  const result = await response.json()
  console.log(result, 'result ')
  return result
  }
  catch(error){
  throw(error)
}
}
export const deleteRoutine = async(token, routineId) => {
  const response = await fetch(`${URL}/routines/${routineId}`, {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  const result = await response.json()
  console.log(result)
  return result
}

export async function createRoutine(event){
  const token = localStorage.getItem('token')
  const newRoutineName = event.target[0].value
  const newRoutineGoal = event.target[1].value
  const newRoutinePublic = event.target[2].checked;
  console.log(newRoutineName, newRoutineGoal, 'newroutinename api')
  try{
     const response = await fetch(`${URL}/routines`,
  {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: `${newRoutineName}`,
        goal: `${newRoutineGoal}`,
        isPublic: newRoutinePublic}),
 })
  const result = await response.json()
  console.log(result, 'result ')
  return result
  }
  catch(error){
  throw(error)
  }
}


export async function getAllActivities() {
  try {
    const response = await fetch(`${URL}/activities`);
    const result = await response.json();
    console.log(result);
    // let postsObj = result.data.activities;
    return result;
  } catch (err) {
    throw("error", err);
  }
}
console.log(getAllActivities())

export async function getPublicRoutine() {
    try {
        const response = await fetch(`${URL}/routines`)
        const result = await response.json()
        console.log(result, 'resultpublicroutines')
        return result        
    } catch (error) {
        throw(error)
    }
}

export async function registerPerson(event){
  const registerUsername = event.target[0].value
  const registerPassword = event.target[1].value
  const response = await fetch(`${URL}/users/register`,
  {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
            username: registerUsername,
            password: registerPassword
        })
  })
  const result = await response.json()
  const token = result.token
  // localStorage.setItem("token", token)
  // const tokenFromStorage = localStorage.getItem("token")

  console.log(result.message, 'message') 
  console.log(token, 'token')
  return result.message
}

export async function loginPerson(username, password){
const response = await fetch(`${URL}/users/login`,
{
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
          username: username,
          password: password
      })
})
const result = await response.json()
const token = result.token

console.log(token, 'token')
console.log(result.message, 'message')
return token
}

export const getUser = async(token) => {
  const response = await fetch(`${URL}/users/me`, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }, 
  })
  const result = await response.json()
  console.log(result, 'getUser')
  return result
}

export async function getUserRoutines(username, token){
  // localStorage.getItem('token', token)
  // console.log(token, 'blah')
  const response = await fetch(`${URL}/users/${username}/routines`,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  const result = await response.json()
  // console.log(result, 'hi')
  return result
}

export async function AddActivityToRoutine(event, routineId){
  const token = localStorage.getItem("token");
  const activityCount = event.target[0].value
  const activityDuration = event.target[1].value
  const activityId = event.target.id
  
  console.log(activityId, 'activityId')
  console.log(activityCount, 'activityCount') 
  console.log(activityDuration, 'activityDuration') 
  try {
    console.log(routineId, 'routineId in api')
    const response = await fetch(`${URL}/routines/${routineId}/activities`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        activityId: `${activityId}`,
        count: `${activityCount}`, 
        duration: `${activityDuration}`
      })
    })
    const result = await response.json()
    console.log(result, 'result ')
    return result
  } catch (error){
    throw error
  }
}
export const editRoutineActivity = async(event, routineActivityId) => {
try{
     const token = localStorage.getItem("token");
     const newRoutineCount = event.target[0].value;
     console.log(newRoutineCount, "newRoutineCount")
     const newRoutineDuration = event.target[1].value;
     console.log(newRoutineDuration, "newRoutineDuration")
     const response = await fetch(`${URL}/routine_activities/${routineActivityId}`, {
      method: "PATCH",
      headers: {
          'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        count: `${newRoutineCount}`,
        duration: `${newRoutineDuration}`,
        }),
 })
  console.log(response, 'response')
  const result = await response.json()
  console.log(result, 'result ')
  return result
  }
  catch(error){
  throw(error)
}
}
export const deleteRoutineActivity = async(token, routineActivityId) => {
try{
     const token = localStorage.getItem("token");
     const response = await fetch(`${URL}/routine_activities/${routineActivityId}`, {
      method: "DELETE",
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      },
 })
  console.log(response, 'response')
  const result = await response.json()
  console.log(result, 'result ')
  return result
  }
  catch(error){
  throw(error)
}
}