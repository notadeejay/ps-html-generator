import React from "react";
import './Nav.css'


export default function Nav(props) {


  return (
  <div className = "nav">
      <p>What would you like to make? A</p>
      <a href="/" name="callout" onClick={event => {
              event.preventDefault()
              props.handleClick(event.target.name);
              }}>Callout</a>
              <p>or a</p>
      <a href="/" name="dropdown" onClick={event => {
              event.preventDefault()
              props.handleClick(event.target.name);
              }}>Dropdown</a>
  </div>
  );
}
