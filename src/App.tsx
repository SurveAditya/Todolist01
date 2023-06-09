import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import {Todo} from './components/model';

const App : React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>

      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {
      todos.map((t)=>
        <li>{t.todo}</li>
      )
      }

    </div>
  );
  
}

export default App;
