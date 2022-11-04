import './App.css';
import { useState} from "react";

function App() {

  const [count , setCount] = useState(0);


  return (
    <div>
      <div className="container">
        <button onClick={()=>{
          setCount(count+1);
        }}>Increase</button>
        <button onClick={()=>{
          setCount(count-1)
        }}>Decrease</button>
        <button onClick={()=>{
          setCount(0)
        }}>Reset</button>
        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default App;
