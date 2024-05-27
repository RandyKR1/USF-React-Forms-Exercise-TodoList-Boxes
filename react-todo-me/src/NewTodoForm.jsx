import React, {useState} from "react";
import {v4 as uuid} from 'uuid';

const NewTodoForm = ({createTodo}) => {
    const INITIAL_STATE = {
        task: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const inputData = (e) => {
        e.preventDefault();
        createTodo({...formData, id: uuid()});
        setFormData(INITIAL_STATE)
    } 

    return(
        <div className="form">
            <form onSubmit={inputData}>
                <div>
                    <label htmlFor="height">Height</label>
                        <br/>
                    <input
                    onChange={handleChange}
                    type="text"
                    name="task"
                    value={formData.task}
                    id="task"
                    />
                </div>
                <button id="newTask">Add a new Task!</button>
            </form>
        </div>
    )
}

export default NewTodoForm