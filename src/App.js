import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPrint,
  faStepForward,
  faDownload,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faPrint,
  faStepForward,
  faDownload,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight
);

function dayToString(day) {
  return [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ][day];
}

function monthToString(month) {
  return [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ][month];
}

class DateDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
    this.shiftDay = this.shiftDay.bind(this);
  }

  shiftDay(days) {
    const newDate = this.state.date;
    newDate.setDate(newDate.getDate() + days);
    this.setState({
      date: newDate,
    });
    console.log(this.state.date);
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        <button onClick={() => this.shiftDay(-7)} className="dateControlButton">
          <FontAwesomeIcon icon="angle-double-left" />
        </button>
        <button onClick={() => this.shiftDay(-1)} className="dateControlButton">
          <FontAwesomeIcon icon="angle-left" />
        </button>
        {dayToString(date.getDay())}, {monthToString(date.getMonth())}{' '}
        {date.getDate()}, {date.getFullYear()}
        <button onClick={() => this.shiftDay(1)} className="dateControlButton">
          <FontAwesomeIcon icon="angle-right" />
        </button>
        <button onClick={() => this.shiftDay(7)} className="dateControlButton">
          <FontAwesomeIcon icon="angle-double-right" />
        </button>
      </div>
    );
  }
}

function ControlPanel(props) {
  return (
    <div>
      <button className="controlPanelButton" onClick={e => console.log(e)}>
        <FontAwesomeIcon icon="step-forward" />
      </button>
      <button className="controlPanelButton" onClick={e => console.log(e)}>
        <FontAwesomeIcon icon="print" />
      </button>
      <button className="controlPanelButton" onClick={e => console.log(e)}>
        <FontAwesomeIcon icon="download" />
      </button>
    </div>
  );
}

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
    };
  }

  selectText(e) {
    e.target.select();
  }

  render() {
    return (
      <form className="task">
        <input type="checkbox" className="checkbox" />
        <input
          type="text-field"
          defaultValue="Enter task here..."
          onFocus={this.selectText}
          className="taskDescription"
        />
      </form>
    );
  }
}

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numTasks: 0,
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(e) {
    const { numTasks, tasks } = this.state;
    console.log(`Added task number ${numTasks}`);
    this.setState({
      numTasks: numTasks + 1,
      tasks: [...tasks, <Task id={numTasks.toString()} />],
    });
  }

  render() {
    return (
      <div>
        {this.state.tasks.map(task => (
          <span key={task.props.id}>{task}</span>
        ))}
        <button onClick={this.addTask} className="addTask">
          +
        </button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Shift List 💩</h1>
        </header> */}
        <DateDisplay className="dateDisplay" />
        <br />
        <TaskList className="taskList" />
        <br />
        <ControlPanel className="controlPanel" />
      </div>
    );
  }
}

export default App;
