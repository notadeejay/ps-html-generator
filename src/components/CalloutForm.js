import React, { useState } from "react";
import './Form.css'
import Button from './Button'

export default function Form(props) {
    const [lead, setLead] = useState("");
    const [type, setType] = useState("instruction" | "")
    const [text, setText] = useState("")

   
  function validate() {
      if (type === 0) {
        alert("The callout type cannot be blank");
      } else {
        props.getCode(type, lead, text); 
      }
  } 


  function clear() {
    setLead("")
    setText("")
    setType("")
    props.getCode(type, lead, text)
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

