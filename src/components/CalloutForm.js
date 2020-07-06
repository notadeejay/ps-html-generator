import React, { useState } from "react";
import './Form.css'
import Button from './Button'

export default function Form(props) {
    const [lead, setLead] = useState("");
    const [type, setType] = useState("instruction" | "")
    const [text, setText] = useState("")
    const [error, setError] = useState("");

   
  function validate() {
      if (type === "") {
        setError("The callout type cannot be blank");
        return;
      } 
  } 

  function clearForm() {
    setText("")
    setType("")
    setLead("")

  }
  return (
   <div className="container form">
    <form className="callout-form" onSubmit={event => { props.getCode(type, lead, text); 
      clearForm()
      event.preventDefault()
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
        
        <Button onClick={validate} />
    </form>
    </div>
  );
}

