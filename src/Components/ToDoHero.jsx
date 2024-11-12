import React, { useState } from 'react';
import { getTodoFromLS, saveTodo } from '../Utilities/saveTodo';
import Active from './Active';

const ToDoHero = () => {
    const [todoItems, setTodoItems] = useState([]);

    const handleTodo = (e) => {
        e.preventDefault();

        const todoInput = e.target.todoInput.value;
        saveTodo(todoInput);

        const todoItems = getTodoFromLS();
        setTodoItems(todoItems);
    }

    return (
        <div className=''>
            <form onSubmit={handleTodo} className="card-body p-0 items-center flex-row gap-4">
                <div>
                    <button className='btn'>Add</button>
                </div>
                <div className="form-control w-full">
                    <input
                        name='todoInput'
                        type="text"
                        placeholder="Create a new todo.."
                        className="input input-bordered input-success w-full" />
                </div>
            </form>
            {/* <Active todoItems={todoItems}></Active> */}
        </div>
    );
};

export default ToDoHero;