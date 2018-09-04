import React from 'react';
import Task from './Task'

function TaskList(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     numTasks: 0,
  //     tasks: {
  //       taskDescription: [],
  //       taskID: [],
  //       taskStatus: [],
  //     },
  //   };
  //   this.addTask = this.addTask.bind(this);
  //   this.updateTaskStatus = this.updateTaskStatus.bind(this);
  // }

  // addTask(e) {
    // const { numTasks, tasks} = this.state;
    // console.log(`Added task number ${numTasks}`);
    // this.setState({
    //   numTasks: numTasks + 1,
    //   tasks: {
    //     ...tasks,
    //     taskDescription: [...tasks.taskDescription, ''],
    //     taskID: [...tasks.taskID, numTasks],
    //     taskStatus: [...tasks.taskStatus, false]
    //   },
    // }, () => {
    //   // this.props.updateList();
    //   console.log(this.state.tasks)
    // });

  // }

  // updateTaskStatus(e, id) {
    // console.log("Task status changed")
    // console.log(e.target.checked)
    // console.log(id)
    // console.log(`Task List: ${this.state.tasks}`)
  // }

  // updateTaskDescription(e, id){
    // console.log("Task description changed")
    // console.log(e.target.value)
    // console.log(id)
  // }
    return (
      <div>
        {
          /* {props.currentList.taskDescription.map(task => (
          <Task
            key={task.toString()}
            updateTaskStatus={this.updateTaskStatus}
            taskID={task.taskID}
            updateTaskDescription={this.updateTaskDescription}
          />
        ))} */}
        <button onClick={() => props.addTask()} className="addTask">
          +
        </button>
      </div>
    );
}

export default TaskList;