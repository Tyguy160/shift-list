import React, { Component } from 'react';
import DateDisplay from './DateDisplay';
import TaskList from './TaskList';

class TaskContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      currentDate: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      ),
    };

    this.addTask = this.addTask.bind(this);
    this.updateTaskDescription = this.updateTaskDescription.bind(this);
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
  }

  // Handles incrementing or decrementing days
  changeDate = days => {
    console.log(`Changed date by ${days} days`);
    console.log(this.state);
    // Pull the current date from state
    const newDate = this.state.currentDate;
    console.log(
      `Before change date: ${this.state.currentDate.toLocaleDateString()}`
    );

    // Add or sub days from current date
    newDate.setDate(newDate.getDate() + days);
    // console.log(`After change date: ${newDate.toLocaleDateString()}`);

    // Update state with new currentDate
    this.setCurrentDate(newDate);

    // Add the new date to the list of dates
    if (!this.state.lists.hasOwnProperty(newDate.toString())) {
      this.addDate(newDate);
    }

    // Add the day's list to the list array
    // this.addList();
  };

  // Change the current date to the new date
  setCurrentDate = date => {
    this.setState(
      {
        currentDate: date,
      },
      () => {
        console.log(
          `Current date set to ${this.state.currentDate.toLocaleDateString()}`
        );
      }
    );
  };

  // Add a date into the list
  addDate = date => {
    this.setState(
      {
        lists: {
          ...this.state.lists,
          [date]: [],
        },
      },
      () => {
        console.log(this.state);
        // Update current task list to show date's task list
        // console.log(this.state.lists[this.state.dates.indexOf(date)]);
        // this.setCurrentList(this.state.lists[this.state.dates.indexOf(date)]);
      }
    );
  };

  addTask() {
    console.log('Added task');
    const date = this.state.currentDate.toString();
    this.setState({
      lists: {
        ...this.state.lists,
        [date]: [
          ...this.state.lists[date],
          {
            task: '',
            status: false,
          },
        ],
      },
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
        [date]: [...taskStatus],
      },
    });
  }

  updateTaskDescription(e, taskID) {
    console.log('Updated task description');
    let taskDescription = JSON.parse(
      JSON.stringify(this.state.lists[this.state.currentDate])
    );
    const date = this.state.currentDate;
    taskDescription[taskID].task = e.target.value;
    this.setState({
      lists: {
        ...this.state.lists,
        [date]: [...taskDescription],
      },
    });
  }

  setCurrentList = list => {
    console.log(`Updated list`);
    console.log(list);
    this.setState({
      currentList: list,
    });
  };

  // Before mounting the component, initialize the tasklist
  componentWillMount() {
    this.addDate(this.state.currentDate);
  }

  render() {
    return (
      <div>
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
        />
      </div>
    );
  }
}

export default TaskContainer;
