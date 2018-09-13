import React, { Component } from "react";
import DateDisplay from "./DateDisplay";
import TaskList from "./TaskList";
import ControlPanel from "./ControlPanel";
import "../styles/TaskContainer.css";

class TaskContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      currentDate: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      )
    };

    this.addTask = this.addTask.bind(this);
    this.updateTaskDescription = this.updateTaskDescription.bind(this);
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
    this.shiftIncomplete = this.shiftIncomplete.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  // Handles incrementing or decrementing days
  changeDate = days => {
    // Pull the current date from state
    const newDate = this.state.currentDate;

    // Add or sub days from current date
    newDate.setDate(newDate.getDate() + days);

    // Update state with new currentDate
    this.setCurrentDate(newDate);

    // Add the new date to the list of dates
    if (!this.state.lists.hasOwnProperty(newDate.toString())) {
      this.addDate(newDate);
    }
  };

  // Change the current date to the new date
  setCurrentDate = date => {
    this.setState({
      currentDate: date
    });
  };

  // Add a date into the list
  addDate = date => {
    this.setState({
      lists: {
        ...this.state.lists,
        [date]: []
      }
    });
  };

  addTask() {
    const date = this.state.currentDate.toString();
    this.setState({
      lists: {
        ...this.state.lists,
        [date]: [
          ...this.state.lists[date],
          {
            task: "",
            status: false
          }
        ]
      }
    });
  }

  updateTaskStatus(e, taskID) {
    let taskStatus = JSON.parse(
      JSON.stringify(this.state.lists[this.state.currentDate])
    );
    const date = this.state.currentDate;
    taskStatus[taskID].status = e.target.checked;
    this.setState({
      lists: {
        ...this.state.lists,
        [date]: [...taskStatus]
      }
    });
  }

  updateTaskDescription(e, taskID) {
    let taskDescription = JSON.parse(
      JSON.stringify(this.state.lists[this.state.currentDate])
    );
    const date = this.state.currentDate;
    taskDescription[taskID].task = e.target.value;
    this.setState({
      lists: {
        ...this.state.lists,
        [date]: [...taskDescription]
      }
    });
  }

  setCurrentList = list => {
    this.setState({
      currentList: list
    });
  };

  shiftIncomplete() {
    const date = this.state.currentDate;
    const datePlusOne = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + 1
    );

    // Get list of incomplete tasks
    let incompleteTasks = JSON.parse(
      JSON.stringify(this.state.lists[this.state.currentDate])
    ).filter(task => task.status === false);

    // Get list of complete tasks
    let completeTasks = JSON.parse(
      JSON.stringify(this.state.lists[this.state.currentDate])
    ).filter(task => task.status === true);

    // Update current day with list of tasks that are complete
    this.setState(
      {
        lists: {
          ...this.state.lists,
          [date]: [...completeTasks]
        }
      },
      () => {
        // Check if the next day does not exist
        if (!this.state.lists.hasOwnProperty(datePlusOne.toString())) {
          this.setState({
            lists: {
              ...this.state.lists,
              [datePlusOne]: [...incompleteTasks]
            }
          });
        }
        // Update next day with add-on of tasks from today that were incomplete
        else {
          this.setState({
            lists: {
              ...this.state.lists,
              [datePlusOne]: [
                ...this.state.lists[datePlusOne],
                ...incompleteTasks
              ]
            }
          });
        }
      }
    );
  }

  // Delete task that the user clicks on
  deleteTask(e, taskID) {
    e.preventDefault();
    const date = this.state.currentDate;
    let tasks = JSON.parse(JSON.stringify(this.state.lists[date]));
    tasks.splice(taskID, 1);
    this.setState({
      lists: {
        ...this.state.lists,
        [date]: [...tasks]
      }
    });
  }

  // Before mounting the component, initialize the tasklist
  componentWillMount() {
    this.addDate(this.state.currentDate);
  }

  render() {
    return (
      <div className="taskContainer">
        <DateDisplay
          className="dateDisplay"
          currentDate={this.state.currentDate}
          dates={this.state.dates}
          changeDate={this.changeDate}
          addDate={this.addDate}
          setCurrentDate={this.setCurrentDate}
        />
        <br />
        <TaskList
          className="taskList"
          list={this.state.lists}
          currentDate={this.state.currentDate}
          addTask={this.addTask}
          updateTaskDescription={this.updateTaskDescription}
          updateTaskStatus={this.updateTaskStatus}
          deleteTask={this.deleteTask}
        />
        <br />
        <ControlPanel
          className="controlPanel"
          shiftIncomplete={this.shiftIncomplete}
          addTask={this.addTask}
        />
      </div>
    );
  }
}

export default TaskContainer;
