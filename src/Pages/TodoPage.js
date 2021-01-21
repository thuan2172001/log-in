import React, {useState, useEffect} from 'react';
import { Card } from '../Components/Card/card';

export const TodoPage = () => {

    const {todo, setTodo} = useState([])

    useEffect(() => {
        fetch('/api').then(resp => {
            if(resp.ok){
                return resp.json()
            }
        }).then(data => setTodo(data))
    }, [])
    return (
        <>
        <Card lisofTodo/>
        </>
    )
}