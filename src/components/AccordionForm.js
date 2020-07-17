import React, { useState } from "react";
import './Form.css'
import './Accordion.css'
import Button from './Button'


export default function Accordion(props) {
  const [inputs, setInputs] = useState(1);
  const [dropdown, setDropdown] = useState({1:{header:"", content:""}})
  

  // Formats the CSS, bad indenting is due to Code Mirror formatting from string
  function addCSS() {
    let formatCSS = `.acc-collapsible {
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  border-radius: 5px;
  text-align: left;
  outline: none;
  margin-top: 4px;
  font-weight: 700;
  font-size: 1.2em; 
}
    
/* Add a background color to the button if it is hovered over*/
.acc-collapsible:hover {
  filter: brightness(85%)
}
      
    
/* Style the collapsible content. Note: hidden by default */
.acc-content {
  padding: 12px 18px 0px 18px;
  overflow: hidden;
  background-color: #f1f1f1;
  display: none;
  border-radius: 5px;
}
    
.acc-toggle-content {
  display: block;
}
    
.yellow {
  background-color: #FFC000;
}

.red {
  background-color: #FC5155;
}

.blue {
  background-color: #1A9DE5;
}`
    return formatCSS
  }
  
// Clears the form

function clear(form) {
  setDropdown({})
  setInputs(1)
  props.clearForm()
}

  
// Takes the information from the Inputs and creates the HTML for each pair.  
  function formatCode() {
    let colorArray = ["blue", "yellow", "red", "blue", "yellow"]
    let divArray = []
    for (const number in dropdown) {
      
      let html =`<div>
  <button class="acc-collapsible ${colorArray[number]}" onclick="document.getElementById('box-${number}').classList.toggle('acc-toggle-content')">${dropdown[number]['header']}</button>
</div>

<div class="acc-content" id="box-${number}">
  <p>${dropdown[number]['content']}</p>
</div>

`
      divArray.push(html)
    }
    
    let formattedHTML = divArray.join('\n')
    let formattedCSS = addCSS()
    props.getCode(formattedHTML, formattedCSS)
  }
  

// Takes the existing dropdown and updates it in state
  function handleChange(e, i) {
    const value = e.value;
    setDropdown({
      ...dropdown,[i]:{
        ...dropdown[i], 
        [e.name]:value }
    });
  }


 
// Generates the number of input fields based on user input 
  function generateInputs(number) {
    const inputs = [];
    for (let i = 1; i <= number; i++) {
      inputs.push(
        <React.Fragment>
        <input onChange={event => {
              handleChange(event.target, i);
              }} placeholder={"Your heading here"} className={`clickable-${i}`}  name={`header`} />
        <textarea placeholder={"Type your content here"} onChange={event => {
              handleChange(event.target, i);
              }} className={`content`}  name={`content`} />
        </React.Fragment>
      )
    }
   return inputs
  }
 

  return (
   <div className="container form">
    <form className="accordion-form" onSubmit={event => {event.preventDefault()
      }}>
         <select 
          onChange={event => {
            setInputs(event.target.value);
          }}
         >
        <option>Select the number of dropdowns</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
       {generateInputs(inputs)}
       <Button validate={formatCode} clear={clear}/>
      </form>
    </div>
  );
}

