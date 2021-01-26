import React, {useEffect, useState} from 'react'
import {LoginForm} from '../Components/Form/loginForm'
import {login} from '../FetchAPI/action'
export const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const onSubmit = () => {
        login(username, password)
    }
    const updateUser = (username) => {
        setUsername(username)
    }
    const updatePass = (pass) => {
        setPassword(pass)
    }
    return (
        <>
        <LoginForm onSubmit = {onSubmit} updateUser = {updateUser} updatePass = {updatePass}/>
        </>
    )
}