
import React, {useEffect, useState} from 'react'
import {getUsers, logout} from '../FetchAPI/action'
import {useHistory} from 'react-router-dom'
export const Home = () => {
    const history = useHistory();
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(data => setUsers(data.users))
    }, [])
    const handleLogout = (event) => {
        logout()
        history.push("/login")
    }
    return (
        <>
        <button onClick = {handleLogout} type="button">Log out</button>
        {users.map(user => {
            return (
                <>
                <div>{user.username}</div>
                </>
            )
        })}
        
        </>
    );
}

