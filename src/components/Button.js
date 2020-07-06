import React from "react";
import "./Button.css";

export default function Button(props) {

  return (
  <div>
    <button className="button" onClick={props.validate}>
      Submit
    </button>
    
    <button className="button clear" onClick={props.clear}>
      Clear Form
    </button>
  </div>
  );
}