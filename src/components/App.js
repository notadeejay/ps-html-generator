import React, { useState } from "react";
import './App.css';
import Callout from './CalloutForm'
import Snippet from './CodeSnippet'
import Accordion from './AccordionForm'
import Nav from './Nav'
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

  function selectForm(name) {
    if (name === "dropdown") {
      setForm("dropdown")
    } else if (name === "callout") {
      setForm("callout")
    } else {
      setForm("")
    }
  }

 
  return (
    <div className="App">
      <Nav handleClick={selectForm}/>
      {form === "dropdown" &&
       <Accordion getCode={getCode} clearForm={clearForm} />}
      {form === "callout" &&
      <Callout getCode={getCode} clearForm={clearForm} /> }
      <Snippet html={html} css={css}/>
    </div>
  );
}

export default App;
