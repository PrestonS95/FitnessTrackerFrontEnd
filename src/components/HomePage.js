import React, {useState, useEffect} from 'react'
import { getUser } from "../api";

const HomePage = () => {
    const [user, setUser] = useState("")
    const token = localStorage.getItem("token")

    const getUserInfo = async () => {
        const userData = await getUser(token)
        setUser(userData.username)
        console.log(setUser)
    }
    console.log(user)
    useEffect(()=> {
        getUserInfo()
    }, [])

    return (
        <div>
            {token ? 
            <div>
                <h1 id="home-title">Welcome {user}!</h1>
            </div> : 
            <div>
                <h1 id="home-title">Please sign up or login in!</h1>
            </div>}
        </div>
    )
}

export default HomePage