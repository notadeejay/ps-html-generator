import React, { useState } from "react";
import './Form.css'
import './Snippet.css'
import Callout from './Callout'
import {Controlled as CodeMirror} from 'react-codemirror2'


export default function Snippet(props) {
    
  return (
  <div className="container code">
    <div className="snippet html">
      <h3>HTML</h3>
      <CodeMirror value={props.html} options={{
    mode: 'html',
    theme: 'monokai',
    lineNumbers: true,
    lineWrapping: true
  }} />
      </div>
    <div className="snippet css">
      <h3>CSS(To be added inside of style tags)</h3>
      <CodeMirror value={props.css} options={{
    mode: 'css',
    theme: 'monokai',
    lineNumbers: true,
    lineWrapping: true
  }} />
  
      </div>
      <Callout html={props.html} />
  </div>
  );
}

