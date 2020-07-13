import React, { useState } from "react";
import './Form.css'
import './Accordion.css'
import Button from './Button'


export default function Accordion(props) {
  const [inputs, setInputs] = useState(1);
  const [dropdown, setDropdown] = useState({1:{header:"", content:""}})
  
   
//   function validate() {
//       if (type === 0) {
//         alert("The callout type cannot be blank");
//       } else {
//         formatCode(type, lead, text); 
//       }
//   } 


//   function clear() {
//     setLead("")
//     setText("")
//     setType("")
//     props.clearForm()
//   }
  
  function addCSS() {
    let formatCSS = `.collapsible {
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
.active, .collapsible:hover {
  filter: brightness(85%)
}
      
    
/* Style the collapsible content. Note: hidden by default */
.hidden-content {
  padding: 12px 18px 0px 18px;
  overflow: hidden;
  background-color: #f1f1f1;
  display: none;
  border-radius: 5px;
}
    
.toggle-content {
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
  

function clear(form) {
  setDropdown({})
  setInputs(1)
  props.clearForm()
}

  
  
  function formatCode() {
    let colorArray = ["blue", "yellow", "red", "blue", "yellow"]
    let divArray = []
    for (const number in dropdown) {
      
      let html =`<div>
  <button class="collapsible ${colorArray[number]}" onclick="document.getElementById('box-${number}').classList.toggle('toggle-content')">${dropdown[number]['header']}</button>
</div>

<div class="hidden-content" id="box-${number}">
  <p>${dropdown[number]['content']}</p>
</div>

`
      divArray.push(html)
    }
    
    let formattedHTML = divArray.join('\n')
    let formattedCSS = addCSS()
    props.getCode(formattedHTML, formattedCSS)
  }
  


  function handleChange(e, i) {
    const value = e.value;
    setDropdown({
      ...dropdown,[i]:{
        ...dropdown[i], 
        [e.name]:value }
    });
  }


 

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

