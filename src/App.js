import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentAccount from "./StudentAccount";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentAccount firstname={"Myiah"} grade = {"A"}/>
      </div>
    );
  }
}

export default App;
