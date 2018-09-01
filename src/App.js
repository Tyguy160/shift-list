import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function dayToString(day) {
  return [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
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

    this.state = {};
  }

  render() {
    const date = new Date();
    return (
      <div>
        <ShiftDay direction="backward" />
        {dayToString(date.getDay())}, {monthToString(date.getMonth())}{' '}
        {date.getDate()}, {date.getFullYear()}
        <ShiftDay direction="forward" />
      </div>
    );
  }
}

function ShiftDay(props) {
  const dir = props.direction;
  if (dir === 'forward') {
    return <button>{'>'}</button>;
  } else if (dir === 'backward') {
    return <button>{'<'}</button>;
  }
}

function ListControlPanel(props) {
  return (
    <div>
      <button className="controlPanelButton" onClick={e => console.log(e)}>
        Shift All Tasks Forward
      </button>
      <button className="controlPanelButton" onClick={e => console.log(e)}>
        Print Tasks
      </button>
      <button className="controlPanelButton" onClick={e => console.log(e)}>
        Download Tasks (.txt)
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
      <form>
        <input type="checkbox" />
        <input
          type="text-field"
          defaultValue="Enter task here..."
          onFocus={this.selectText}
        />
      </form>
    );
  }
}

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numTasks: 1,
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
        <button onClick={this.addTask}>+</button>
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
        <DateDisplay />
        <TaskList />
        <ListControlPanel />
      </div>
    );
  }
}

export default App;
