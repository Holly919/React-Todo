import React from 'react';

const ToDo = props => {
    const handleClick = event => {
        props.toggleTaskCompleted(props.task.id);
      };
      
      console.log(props)
    return (
        
      <div onClick={handleClick}
      className={`task${props.task.completed ? " completed" : ""}`}
        >
          <p>{props.task.task}</p>
      </div>
    );
};

export default ToDo;