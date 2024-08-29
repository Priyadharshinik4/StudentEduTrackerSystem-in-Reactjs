import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./components/Sidebar.js";
import Body from "./components/Body.js";
import "./App.css";

function Main(){
  return (
    <div>
      <Sidebar />
      <Body />
    </div>
  )
}

ReactDOM.render(<Main />,document.getElementById('root'));
