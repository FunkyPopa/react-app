import {useEffect, useState} from "react";

import {todoService} from "../../services";
import {Todo} from "../todo/Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todoService.getAll.then(({data}) => {
            setTodos(data)
            console.log(data)
        })
    }, [])

    return (
        <div>
        {
            todos.map(todo => <Todo item={todo} key={todo.id}/>)
        }
        </div>
    );
};

export {Todos}