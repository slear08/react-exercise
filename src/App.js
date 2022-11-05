import './App.css';
import { useState } from 'react';
import { Task } from "./Task";  

function App() {
  const [todoList , setTodoList] = useState([]);
  const [task , setTask] = useState("");
  
  const handleOnChange = (event) => {
      setTask(event.target.value);
  };

  const addTask = () => {
      const newTodo = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: task,
        status: false
      };
      setTodoList([...todoList,newTodo]);
     
  };

  const deleteTasks = (id)=> {
    setTodoList(todoList.filter((task)=>task.id !== id));
  };

  const completeHandler = (id)=>{
    setTodoList(todoList.map((task)=>{
      if(task.id === id){
        if(task.status === false){
          return {...task, status: true}
        }else{
          return {...task, status: false}
        }
      }else{
        return task;
      }
    }
    ));
  }
  return (
    <div className="App">
        <div className="input-task">
          <input type="text" onChange={handleOnChange}/>
          <button onClick={addTask}>ADD TASK</button>
        </div>
        <div className="task-list">
          {todoList.map((todo)=>{
              return <Task key={todo.id} task={todo.taskName} id={todo.id} deleteTask={deleteTasks}
              stat={todo.status} complete={completeHandler}/>;
          })}
        </div>
    </div>
  );
}

export default App;
