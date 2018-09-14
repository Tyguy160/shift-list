import React, { Component } from "react";
import Container from "./components/Container";
// import logo from './logo.svg';
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">
            My Shift List
            <div className="App-logo">
              <span role="img" aria-label="Poop">
                💩
              </span>
            </div>
          </h1>
        </header>
        <Container className="container" />
      </div>
    );
  }
}

export default App;
