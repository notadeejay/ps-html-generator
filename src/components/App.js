import React, { useState } from "react";
import './App.css';
import Callout from './CalloutForm'
import Snippet from './CodeSnippet'
import Accordion from './AccordionForm'
require('codemirror/lib/codemirror.css');

function App() {
  const [html, setHtml] = useState("");
  const [css, setCSS] = useState("");
  const [form, setForm] = useState("")

    
  
  function getCode(html, css){
      setHtml(html)
      setCSS(css)
  }

  function clearForm(){
    setHtml("")
    setCSS("")
  }

 
  return (
    <div className="App">
      <Accordion getCode={getCode} clearForm={clearForm} />
      <Snippet html={html} css={css}/>
    </div>
  );
}

export default App;
