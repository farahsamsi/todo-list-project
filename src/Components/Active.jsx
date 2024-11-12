import React, { useContext, useEffect, useState } from 'react';
import { getTodoFromLS, saveTodo } from '../Utilities/saveTodo';
import TodoItem from './TodoItem';
import { TodoContext } from '../Providers/ContextProvider';

const Active = () => {
    const todoListFromContext = useContext(TodoContext);
    const [todoItems, setTodoItems] = useState();

    // useEffect(() => {
    //     const newTodo = ;
    //     console.log(newTodo)
    // }, [])

    useEffect(() => {
        setTodoItems(todoListFromContext);
    }, [todoListFromContext])



    return (
        <div className='my-6'>
            <h1 className='text-2xl font-semibold text-center mb-4'>Tasks to do..:{todoItems?.length}</h1>

            <div className='flex flex-col gap-4'>
                {
                    todoItems?.map((item, idx) => <TodoItem
                        key={idx}
                        item={item}
                    ></TodoItem>)
                }
            </div>

        </div>
    );
};

export default Active;