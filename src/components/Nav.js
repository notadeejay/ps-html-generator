import React from "react";
import './Nav.css'


export default function Nav(props) {


  return (
  <div className = "nav">
      <a href="/" name="callout" onClick={event => {
              event.preventDefault()
              props.handleClick(event.target.name);
              }}>Callout</a>
      <a href="/" name="dropdown" onClick={event => {
              event.preventDefault()
              props.handleClick(event.target.name);
              }}>Dropdown</a>
  </div>
  );
}
