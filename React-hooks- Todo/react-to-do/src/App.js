import React, {useEffect} from 'react';
import './App.css';
import Todo from './components/Todo';
import Todoform from './components/Todoform';
import Todolist from './components/Todolist';
import axios from 'axios';

function App() {
  const [todos, setTodos] = React.useState([]);
  //   {
  //     text: "Learn about React",
  //     isCompleted: false
  //   },
  //   {
  //     text: "Meet friend for lunch",
  //     isCompleted: false
  //   },
  //   {
  //     text: "Build really cool todo app",
  //     isCompleted: false
  //   }
  // ]);

  useEffect(async () => {
    const result = await axios(
      'https://jsonplaceholder.typicode.com/todos',
    );
    console.log(result.data)
    let fav=[];
    result.data.forEach(user=>{
      fav.push(user);
      })
      fav=fav.slice(0,9);
 
    setTodos(fav);
  },[]);
 

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <Todoform addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
