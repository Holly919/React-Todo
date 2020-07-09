import React from 'react';

import './components/Todo.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const list = [
  {
    task: 'Study Class Components',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Walk the Dog',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Weed Garden',
    id: 1528817077287,
    completed: false
  },
  {
    task: 'Do Laundry',
    id: 1528817084388,
    completed: false
  }


];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list 
    };
  }

  taskName = taskName => {
    this.setState({
      list: [
        ...this.state.list,
        {
          task: taskName,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  toggleCompleted = taskId => {
    this.setState({
      list: this.state.list.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  

  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter(task => {
        return !task.completed;
      })
    });
  };
  

  render() {
    return (
      <div className= "App">
        {console.log("app")}
        <div className= "header">
          <h1>To Do List</h1>
          <TodoForm addTask={this.taskName} />
          </div>
        <TodoList 
        list={this.state.list}
        toggleCompleted={this.toggleCompleted} 
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;