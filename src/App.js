import './App.css';
import Axios  from 'axios';
import { useState } from 'react';

function App() {
  const [excuse,setExcuse] = useState("");

  const fetchData = (excuse) =>{
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}`).then((response)=>{
      setExcuse(response.data[0].excuse);
    });
  }

  return (
    <div className="App">
        <h1>Generate an Exuse</h1>
        <button onClick={()=>{ fetchData("party")} }>Party</button>
        <button onClick={()=>{ fetchData("family")} }>Family</button>
        <button onClick={()=>{ fetchData("office")} }>Office</button>

        <div className="excuse-container">
          <h1>{excuse}</h1>
        </div>
    </div>
  );
}

export default App;
