import React, { Component } from 'react';
import TaskContainer from './components/TaskContainer';
import ControlPanel from './components/ControlPanel';
// import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Shift List 💩</h1>
        </header> */}
        <TaskContainer className="taskContainer" />
        <br />
        <ControlPanel className="controlPanel" />
      </div>
    );
  }
}

export default App;
