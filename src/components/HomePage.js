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
        <div className = 'home-page'>
            {token ? 
            <div className = 'home-page'>
                <h1 id="home-title">Welcome {user}!</h1>
                <div className = "home-quote">
                <p id="home-quote">"You are one workout away from a better mood!"</p>
                </div>
            </div> : 
            <div className = 'home-page'>
                <h1 id="home-title">Please login in or sign up!</h1>
                <div className = "home-quote">
                <p id="home-quote">"You may not be there yet, but you are closer than you were yesterday"</p>
                </div>
            </div>}
        </div>
    )
}

export default HomePage