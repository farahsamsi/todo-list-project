import React, { createContext } from 'react';
import { getTodoFromLS } from '../Utilities/saveTodo';

export const TodoContext = createContext(null);

const ContextProvider = ({ children }) => {

    const todoList = getTodoFromLS();

    return (
        <TodoContext.Provider value={todoList}>
            {children}
        </TodoContext.Provider>
    );
};

export default ContextProvider;