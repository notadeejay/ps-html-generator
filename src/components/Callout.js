import React, { useState } from "react";
import './Snippet.css'
import { Markup } from 'interweave';


export default function Callout(props) {
  const example = props.html  
  return (
  <div className = "example">
      {example && 
      <h3>Your element will look like this:</h3> }
      <Markup content={props.html} /> 
  </div>
  );
}

