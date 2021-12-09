import { useState } from 'react';
import Task from './Task';
import Rugvista from './RugVista.json';

function App() {
  const [todos, setTodos] = useState(Rugvista.items);

  
  function strikethrough(id) {
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
    <div className="App container w-50 p-3">
      <header className="App-header">
        <div className="posts">
          {
            <div>
              <h4>Rugvista</h4>
              <div>
                {console.log(todos.length)}
                {todos.map(todo => {
                  return <Task strikethrough={strikethrough} todo={todo} key={todo.id} />
                })}
              </div>
            </div>
          }
        </div>
      </header >
    </div >
  );
}


export default App;