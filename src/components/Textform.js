
import React, { useState } from 'react'


export default function Textform(props) {
    
    const handleUpclick=()=>{
        console.log("uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        // props.showalert("converted to uppercase",'success')
    }
    const handleloclick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclearclick=()=>{
        let newText = ('');
        setText(newText);
    }
    const handleclearcspace=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const handleOnChange=(event)=>{
        console.log("onchange");
        setText(event.target.value)
        }
        const handlecopy=()=>{
            var text = document.getElementById("exampleFormControlTextarea1");
            text.select();
            navigator.clipboard.writeText(text.value);
        }
    const [text, setText]=useState("");
    return (
        <>
<div className={` my-3 text-${props.mode==='dark'?'light':'dark'}`}>
<h3 className={`text-${props.mode==='dark'?'light':'dark'}`}>Enter Your Text Here</h3>
 <textarea className="form-control" value ={text} style={{backgroundColor:props.mode==='dark'?'#6b764b':'white',
color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
  </div>
<button  className="btn btn-success mx-1" onClick={handleUpclick}>Change to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleloclick}>Change to Lowercase</button>
<button className="btn btn-secondary mx-1" onClick={handleclearcspace}>Clear Extra space</button>
<button className="btn btn-info mx-1" onClick={handlecopy}>Copy text</button>

<button className="btn btn-warning mx-1" onClick={handleclearclick}>Clear text</button>


<div className="container my-4 ">
    <h2 className={`text-${props.mode==='dark'?'light':'dark'}`}>Text Details :</h2>
    <div className={`text-${props.mode==='dark'?'light':'dark'}`}>{text.split(" ").length} words AND {text.length} characters</div>
  <div className={`text-${props.mode==='dark'?'light':'dark'}`}>{0.008*text.split(" ").length} minutes (To read)</div>  
  <h5 className={` my-3 text-${props.mode==='dark'?'light':'dark'}`}>PREVIEW</h5>
  <p className={`text-${props.mode==='dark'?'light':'dark'}`}>{text.length===0?'enter text':text}</p>

</div>

    </>
    )
}
