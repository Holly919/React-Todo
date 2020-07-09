// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const ToDoList = (props) => {
  return (
      
    <div className="todo-list">
      
        {props.list.map(task => (
          <Todo            
          toggleTaskCompleted={props.toggleTaskCompleted}
          key={task.id}
        //   id={task.id}
          task={task}
          />
        ))}
         <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed Tasks
      </button>
      </div>
  );
};

export default ToDoList;