import React, { useState } from "react";
import './Form.css'
import Button from './Button'

export default function Callout(props) {
    const [lead, setLead] = useState("");
    const [type, setType] = useState("instruction" | "")
    const [text, setText] = useState("")

   
  function validate() {
      if (type === 0) {
        alert("The callout type cannot be blank");
      } else {
        formatCode(type, lead, text); 
      }
  } 


  function clear() {
    setLead("")
    setText("")
    setType("")
    props.clearForm()
  }
  
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
    return formatCSS
  }
  
  
  
  function formatCode(type, word, code) {
    let color = type === "instruction" ? "#247F3B"
    : type === "note" ? "#1375AA"
    : type === "warning" ? "#D30307"
    : type === "definition" ? "#2B4497" : "#000000"
    
    let formattedCSS = addCSS(color, type)
    
    let leadingWord = word ? word : type.charAt(0).toUpperCase() + type.slice(1)

    let formattedCode = `<div class="callout ${type}"><p><span style="color:${color};"><strong>${leadingWord}:</strong></span> ${code}</p></div>`
    
    props.getCode(formattedCode,formattedCSS )
    }
  

 

  return (
   <div className="container form">
    <form className="callout-form" onSubmit={event => {event.preventDefault()
      }}>
         <select 
          value={type} 
          onChange={event => {
            setType(event.target.value);
          }}
         >
        <option>Select a callout type</option>
        <option value="instruction">Instruction</option>
        <option value="note">Note</option>
        <option value="warning">Warning</option>
        <option value="definition">Function Syntax</option>

      </select>
         <input
            className="lead-word"
            name="lead"
            type="text"
            placeholder="Enter leading word(tip, note, etc). If left blank will default to callout type."
            value={lead}
            onChange={event => {
              setLead(event.target.value);
              
            }}
          />

        <textarea
            className="callout-text"
            placeholder="Enter the content for your callout"
            value={text}
            onChange={event => {
              setText(event.target.value);
            }}
          />
        
        <Button validate={validate} clear={clear}/>
    </form>
    </div>
  );
}

