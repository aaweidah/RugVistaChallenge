import { useState } from 'react';
import Task from './Task';
import Rugvista from './RugVista.json';
import MenyText from './components/FontStyle';

function App() {
  const [todos, setTodos] = useState(Rugvista.items || []);

  function CheckComplete(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo, /* Spread operator */
          complete: !todo.complete
        }
      }
      return todo;
    })
    )
  }
  
  return (
    
    <div className="App container p-3 m-auto mt-5">
      <header className="App-header">
        <div className="posts">
          {
            <div>
              <MenyText>Todo-List</MenyText>
              <div>
                {todos.map(todo => {
                  return <Task CheckComplete={CheckComplete} todo={todo} key={todo.id} />
                })}
              </div>
            </div>
          }
        </div>
      </header >
    </div>
  );
}

export default App;