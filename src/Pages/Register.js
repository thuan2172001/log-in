import React, {useEffect, useState} from 'react'
import {RegisterForm} from '../Components/Form/registerForm'
import {register} from '../FetchAPI/action'
export const Register = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const onSubmit = () => {
        register(username, password).then(data => console.log(data))
    }
    const updateUser = (username) => {
        setUsername(username)
    }
    const updatePass = (pass) => {
        setPassword(pass)
    }
    return (
        <>
        <RegisterForm onSubmit = {onSubmit} updateUser = {updateUser} updatePass = {updatePass}/>
        </>
    )
}