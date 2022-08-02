const BASE = `https://agile-basin-92861.herokuapp.com/api`;;
export const URL = `${BASE}`;


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