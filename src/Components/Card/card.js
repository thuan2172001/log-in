import React from 'react';

export const Card = ([ { listofTodo } ]) => {
    return (
        <>
        {listofTodo.map(todo => {
            return(
                <ul>
                    <li>
                        { todo.name }
                    </li>
                </ul>
            )
        })}
        </>
    )
}