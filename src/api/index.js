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