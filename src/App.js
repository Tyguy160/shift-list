import React, { Component } from "react";
import TaskContainer from "./components/TaskContainer";
// import logo from './logo.svg';
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">
            My Shift List{" "}
            <span role="img" aria-label="Poop">
              💩
            </span>
          </h1>
        </header>
        <TaskContainer className="taskContainer" />
      </div>
    );
  }
}

export default App;
