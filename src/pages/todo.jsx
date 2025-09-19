import './todo.css';
import {useState} from 'react';

function Todo(){
    const [allTodos, setAllTodos] = useState([]);
    const [todo, setTodo] = useState({
        text: ''
    });

    function handleInput(e){
        let text = e.target.value;
        let name = e.target.name;

        let copy = {...todo};
        copy[name] = text;
        setTodo(copy);
    }

    function save(){
        console.log(todo);

        let copy = [...allTodos];
        copy.push(todo);
        setAllTodos(copy);
    }

    return(
        <div className='todo'>
            <h1>My Todo</h1>
            <div>

                <div>
                    <label className="form-label">Todo:</label>
                    <input onBlur={handleInput} name="text" type="text" className="form-control" />
                </div>
                <div>
                    <button onClick={save} className="btn-save">Save Todo</button>
                </div>
                <ul className='list'>
                    {allTodos.map(todo => <li key={todo.text}>{todo.text}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default Todo;