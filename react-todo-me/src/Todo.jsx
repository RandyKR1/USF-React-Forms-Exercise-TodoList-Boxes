import React from "react";

const Todo = ({task = "default", id = "1", handleRemove}) => {
    const remove = () => handleRemove(id)

    return(
        <div>
            <li>{task}</li>
            <button onClick={remove}>Delete!!</button>
        </div>
    )
}

export default Todo;

