export const Task = ({task,id,deleteTask,stat,complete}) => {
  return(
      <div>
        <p style={stat !== false? {color:"green"} : {color: "black"}}>{task}</p>
        <button onClick={()=>complete(id)}>COMPLETE</button>
        <button onClick={()=>deleteTask(id)}>DELETE</button>
      </div>);
}
