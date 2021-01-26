import React, {useState}from 'react';

export const RegisterForm = ( {onSubmit, updateUser, updatePass} ) => {
    const [userInput, setUserInput] = useState()
    const [passwordInput, setPasswordInput] = useState()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(userInput, passwordInput)
    }
    const onChangeUser = (event) => {
        updateUser(event.target.value)
    }
    const onChangePass = (event) => {
        updatePass(event.target.value)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input type="text" required value={userInput} onChange = {onChangeUser}></input>
            <br></br>
            <label>Passowrd : </label>
            <input type="password" required value={passwordInput} onChange = {onChangePass}></input>
            <input type="submit"></input>
        </form>
        </>
    )
}
