import React, { useState } from "react";
import './App.css';
import Form from './CalloutForm'
import Snippet from './CodeSnippet'
require('codemirror/lib/codemirror.css');

function App() {
  const [html, setHtml] = useState("");
  const [css, setCSS] = useState("");

  
  function addCSS(color, type) {
    let formatCSS = `/* core formatting for the callout div */
.callout {
  padding: 10px 20px;
  max-width: 95%;
  margin: 20px auto;
  background-color: #F5F5F5;
  color: black;
  border-radius: 5px;
}
/* adds the correct color border based on callout type */
.${type}{
  border-left: 3px solid ${color};
}`
    setCSS(formatCSS)
  }
  
  
  
  function formatCode(type, word, code) {

    if (type === "") {
      setHtml("")
      setCSS("")
    } else {

    let color = type === "instruction" ? "#247F3B"
    : type === "note" ? "#1375AA"
    : type === "warning" ? "#D30307"
    : type === "definition" ? "#2B4497" : "#000000"
    
    addCSS(color, type)
    
    let leadingWord = word ? word : type.charAt(0).toUpperCase() + type.slice(1)

    let formattedCode = `<div class="callout ${type}"><p><span style="color:${color};"><strong>${leadingWord}:</strong></span> ${code}</p></div>`
    setHtml(formattedCode)
    }
  }

 
  return (
    <div className="App">
      <Form getCode={formatCode}/>
      <Snippet html={html} css={css}/>
    </div>
  );
}

export default App;
