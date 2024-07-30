import React from 'react';

const InputWithLabel = (props) => {
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>{props.label}</label>
            <input
                id="todoTitle"
                type="text"
                name="todo"
                value={props.todoTitle}
                onChange={props.handleTitleChange}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default InputWithLabel;