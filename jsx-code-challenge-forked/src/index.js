//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Unordered List</h1>
    <ul>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
    </ul>
  </div>,
  document.getElementById("root")
);
