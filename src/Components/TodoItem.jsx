import React from 'react';

const TodoItem = ({ item }) => {
    return (
        <div className='bg-white rounded-2xl w-full p-4 border flex items-center gap-4'>
            <input type="checkbox" className="checkbox" />
            <h1 className='text-xl'>{item}</h1>
        </div>
    );
};

export default TodoItem;