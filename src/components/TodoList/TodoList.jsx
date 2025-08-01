import React from "react";
import TodoItem from "./TodoItem/TodoItem";

function todolist(props) {
    const todos = props.todos;
    return(
        <div>
            <TodoItem task={todos[0].task} isFinished={todos[0].isFinished} dueDate={todos[0].dueDate}/>
            <TodoItem task={todos[1].task} isFinished={todos[1].isFinished} dueDate={todos[1].dueDate}/>
            <TodoItem task={todos[2].task} isFinished={todos[2].isFinished} dueDate={todos[2].dueDate}/>
            <TodoItem task={todos[3].task} isFinished={todos[3].isFinished} dueDate={todos[3].dueDate}/>    
        </div>
    )
    
}
export default todolist;