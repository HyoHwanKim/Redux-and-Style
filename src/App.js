import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import React from "react";
import WorkingAndDone from "./components/WorkingAndDone";


function App() {

  return (
    <div>
      <AddTodo />
      <WorkingAndDone />
    </div>
  );
}

export default App;
