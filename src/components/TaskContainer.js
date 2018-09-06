import React, { Component } from 'react';
import DateDisplay from './DateDisplay';
import TaskList from './TaskList';

class TaskContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      currentList: [],
      currentDate: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      ),
    };
  }

  // Handles incrementing or decrementing days
  changeDate = days => {
    console.log(`Changed date by ${days} days`);

    // Pull the current date from state
    const newDate = new Date(this.state.currentDate);
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
      this.addDate(newDate.toString());
    }

    // Add the day's list to the list array
    this.addList();
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

  // If the date is not in the state's list of dates, add it in
  addDate = date => {
    this.setState(
      {
        lists: {
          ...this.state.lists,
          [date]: [
            {
              task: '',
              status: false,
            },
          ],
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
  }

  addList() {
    console.log('Added new list');
  }

  setCurrentList = list => {
    console.log(`Updated list`);
    console.log(list);
    this.setState({
      currentList: list,
    });
  };

  // Before mounting the component, initialize the tasklist
  componentDidMount() {
    const date = this.state.currentDate.toString();
    this.addDate(date);
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
          currentList={this.state.currentList}
          lists={this.state.lists}
          setCurrentList={this.setCurrentList}
          addTask={this.addTask}
        />
      </div>
    );
  }
}

export default TaskContainer;