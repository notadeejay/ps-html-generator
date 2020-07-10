import React, { useState } from "react";
import './Form.css'
import './Accordion.css'
import Button from './Button'

export default function Accordion(props) {
  const [inputs, setInputs] = useState(1);
  
   
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
  
//   function addCSS(color, type) {
//     let formatCSS = `/* core formatting for the callout div */
// .callout {
//   padding: 10px 20px;
//   max-width: 95%;
//   margin: 20px auto;
//   background-color: #F5F5F5;
//   color: black;
//   border-radius: 5px;
// }
// /* adds the correct color border based on callout type */
// .${type}{
//   border-left: 3px solid ${color};
// }`
//     return formatCSS
//   }
  
  
  
//   function formatCode(type, word, code) {
//     let color = type === "instruction" ? "#247F3B"
//     : type === "note" ? "#1375AA"
//     : type === "warning" ? "#D30307"
//     : type === "definition" ? "#2B4497" : "#000000"
    
//     let formattedCSS = addCSS(color, type)
    
//     let leadingWord = word ? word : type.charAt(0).toUpperCase() + type.slice(1)

//     let formattedCode = `<div class="callout ${type}"><p><span style="color:${color};"><strong>${leadingWord}:</strong></span> ${code}</p></div>`
    
//     props.getCode(formattedCode,formattedCSS )
//     }
  
  
  function generateInputs(number) {
    const inputs = [];
    for (let i = 1; i <= number; i++) {
      inputs.push(
        <React.Fragment>
        <input placeholder={"Your heading here"}className={`clickable-${i}`} name={`input-${i}`} />
        <textarea placeholder={"Type your content here"} className={`content`} name={`content-${i}`} />
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
      </form>
    </div>
  );
}

