import React, { Component } from 'react';
import Task from './Task'

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numTasks: 0,
      tasks: {
        taskDescription: [],
        taskID: [],
        taskStatus: [],
      },
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(e) {
    const { numTasks, tasks} = this.state;
    console.log(`Added task number ${numTasks}`);
    console.log(tasks)
    this.setState({
      numTasks: numTasks + 1,
      tasks: {
        ...this.state.tasks,
        taskDescription: [...this.state.tasks.taskDescription, ''],
        taskID: [...this.state.tasks.taskID, numTasks],
        taskStatus: [...this.state.tasks.taskStatus, false]
      },
    }, () => {
      // this.props.updateList();
      console.log(this.state.tasks)
    });

  }

  updateTaskStatus(e, id) {
    console.log("Task status changed")
    console.log(e.target.checked)
    console.log(id)
  }

  updateTaskDescription(e, id){
    console.log("Task status changed")
    console.log(e.target.value)
    console.log(id)
  }

  render() {
    return (
      <div>
        {this.state.tasks.taskID.map(task => (
          <Task
            key={task.toString()}
            updateTaskStatus={this.updateTaskStatus}
            taskID={task}
            updateTaskDescription={this.updateTaskDescription}
          />
        ))}
        <button onClick={this.addTask} className="addTask">
          +
        </button>
      </div>
    );
  }
}

export default TaskList;