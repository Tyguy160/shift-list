import React, { Component } from 'react';
import DateDisplay from './DateDisplay';
import TaskList from './TaskList';

class TaskContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskLists: {
        dates: [],
        lists: [],
      },
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
    // console.log(`Changed date by ${days} days`);

    // Pull the current date from state
    const newDate = new Date(this.state.currentDate);
    // console.log(
    //   `Before change date: ${this.state.currentDate.toLocaleDateString()}`
    // );

    // Add or sub days from current date
    newDate.setDate(newDate.getDate() + days);
    // console.log(`After change date: ${newDate.toLocaleDateString()}`);

    // Update state with new currentDate
    this.setCurrentDate(newDate);

    // Add the new date to the list of dates
    this.addDate(newDate);
  };

  // Change the current date to the new date
  setCurrentDate = date => {
    this.setState(
      {
        currentDate: new Date(date),
      },
      () => {
        // console.log(
        //   `Current date set to ${this.state.currentDate.toLocaleDateString()}!`
        // );
      }
    );
  };

  // If the date is not in the state's list of dates, add it in
  addDate = date => {
    if (
      !this.state.taskLists.dates
        .map(dateFromArray => dateFromArray.toLocaleDateString())
        .includes(date.toLocaleDateString())
    ) {
      this.setState(
        {
          taskLists: {
            dates: [...this.state.taskLists.dates, date],
            lists: [...this.state.taskLists.lists, []],
          },
        },
        () => {
          // DEBUGGING: Print all dates in list
          // this.state.dates.map(dateFromArray =>
          //   console.log(dateFromArray.toLocaleDateString())
          // );
          console.log(this.state.taskLists);
        }
      );
    }
  };

  addListToTaskList = list => {
    console.log(
      `Current date: ${this.state.currentDate.toLocaleDateString()}\nList of dates:${this.state.taskLists.dates.map(
        date => date.toLocaleDateString()
      )}\nIndex of current date: ${this.state.taskLists.dates
        .map(date => date.toLocaleDateString())
        .indexOf(this.state.currentDate.toLocaleDateString())}`
    );
    this.setState({
      taskLists: {
        ...this.state.taskLists,
        lists: [...this.state.taskLists.lists, list],
      },
    });
  };

  updateList = list => {
    console.log(`Updated list`);
    console.log(list);
  };

  // Before mounting the component, initialize the tasklist
  componentDidMount() {
    const date = this.state.currentDate;
    this.addDate(date);
  }

  render() {
    return (
      <div>
        <DateDisplay
          className="dateDisplay"
          currentDate={this.state.currentDate}
          dates={this.state.taskLists.dates}
          changeDate={this.changeDate}
          addDate={this.addDate}
          setCurrentDate={this.setCurrentDate}
        />
        <br />
        <TaskList
          className="taskList"
          currentList={this.state.currentList}
          lists={this.state.taskLists.lists}
          updateList={this.updateList}
          addListToTaskList={this.addListToTaskList}
        />
      </div>
    );
  }
}

export default TaskContainer;
