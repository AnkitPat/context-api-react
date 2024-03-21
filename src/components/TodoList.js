import React, { useContext } from 'react';

import { Todo } from "./Todo";
import { Store } from '../Context';

export const TodoList = () => {
    const { state, dispatch } = useContext(Store);

    const todoList = state.todoList.map((todo) => (
        <Todo
            key={todo.id}
            todoId={todo.id}
            todoText={todo.title}
            todoTag={todo.tag}
            dispatch={dispatch}
        />
    ));

    return <div className="todo-list">{todoList}</div>;
};