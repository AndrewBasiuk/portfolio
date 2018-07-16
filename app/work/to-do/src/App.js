import React, { Component } from 'react';
import './App.css';
// import {TaskList} from './component/TaskList';
import {InputTodo} from './component/InputTodo';


class App extends Component {

  render() {
    return (
      <div className="container">
          <InputTodo></InputTodo>
      </div>
    );
  }
}



export default App;
