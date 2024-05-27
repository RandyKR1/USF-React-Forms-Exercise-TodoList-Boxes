import React, {useState} from "react";
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"

const ToDoList = () => {
    const [todosArr, setTodosArr] = useState([]);

    const addTodo = newTodo => {
        setTodosArr(todos => [...todos, newTodo]);
    }

    const deleteTodo = id => {
        setTodosArr(todos => todos.filter(todo => todo.id !== id));
    }

    const todoComponents = todosArr.map( todo => (
        <Todo 
            key = {todo.id}
            id = {todo.id}
            task = {todo.task}
            handleRemove = {deleteTodo}
        />
    ));

    return (
        <div>
            <NewTodoForm createTodo = {addTodo} />
            <ul>{todoComponents}</ul>
        </div>
    )
}

    export default ToDoList