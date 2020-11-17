import React, { useState } from 'react';
import '../styles/todo.scss';

function Todo() {
    const [todoList, setTodoList] = useState([
        {
            message: "lorem ipsum sit dolar amet",
            isCompleted: false
        },
        {
            message: "bizim buralarda hava soğudu",
            isCompleted: false
        },
        {
            message: "marketten 2 eppek al gel",
            isCompleted: false
        }
    ]);
    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let value = todo.trim();

        if (value.length <= 0) {
            alert('Boş bırakılamaz!');
            return false;
        }

        let newState = [...todoList];

        newState.unshift({
            message: value,
            isCompleted: false
        });

        setTodoList(newState);
        setTodo('');
    };

    const selectTodo = (e, index) => {

        const newState = [...todoList];

        let boolean = e.target.classList.contains('completed') ? true : false;

        newState[index].isCompleted = ! boolean;

        if (boolean) {
            e.target.classList.remove('completed');
        } else {
            e.target.classList.add('completed');
        }

        setTodoList(newState);
    };

    return (
        <div className="todo-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="form-element">
                    <input type="text" name="todo" value={todo} onChange={e => setTodo(e.target.value)} className="form-input" />
                </div>
            </form>

            <div className="todo-lists">
                {
                    todoList.map((item, key) => {
                        return <div className="todo-item" key={key} onClick={e => selectTodo(e, key)}>
                                    {item.message}
                                </div>
                    })
                }
            </div>
        </div>
    );
}

export default Todo;