import React from "react";

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: "",
    };
  }

  handleChanges = (event) => {
      event.preventDefault();
      this.setState({ 
        newTask: event.target.value });
  };

    handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props)
    this.props.addTask(this.state.newTask);
    
  };

  render() {
    return (
      <div className="ToDoForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="task"
            value={this.state.newTask}
            onChange={this.handleChanges}
          />
          <button>Add Task</button>
        </form>
         
      </div>
    );
  }
}

export default ToDoForm;