import React ,{useState} from 'react'


export default function Textform(props) {
    const [text,setText]= useState("")
    const handleUpOnClick=()=>{
        let newText= text.toUpperCase()
        setText(newText)
       
    }

    const handleOnChange= (event)=>{
      
        setText(event.target.value)
    }

    const handleLowerOnClick=()=>{
        let newText= text.toLowerCase()
        setText(newText)
       
    }
    const handleClearOnClick= ()=>{
        let newText=" "
        setText(newText)

    }

    const handleCopyOnClick=()=>{
    
     navigator.clipboard.writeText(text)
     
     
    }

    const handleRemoveExtraOnClick=()=>{
    let newText= text.split(/[ ]+/)  
    setText(newText.join(" "))
    
    }
    
  return (
    <>
    <h2>Try TextUtils- Word Counter, Character Counter, Remove Extra Spaces :</h2>
    <div>
      <textarea className='textArea' name="textArea" id="textArea" cols="111" rows="11"  value={text} onChange={handleOnChange}></textarea>
      
    </div>
    <button disabled={text.length===0} className="btn1" onClick={handleRemoveExtraOnClick}>Remove Extra Spaces</button>
    <button disabled={text.length===0} className="btn2" onClick={handleUpOnClick}>Convert to UpperCase</button>
    <button disabled={text.length===0} className="btn2" onClick={handleLowerOnClick}>Convert to LoverCase</button>
    <button disabled={text.length===0} className="btn2" onClick={handleCopyOnClick}>Copy Text</button>
    <button disabled={text.length===0} className="btn2" onClick={handleClearOnClick}>Clear Text</button>
    
    <div>
       <h1 className='head'>Your Text Summery</h1>
       <p>{text.split(/\s+/).filter((element)=>{return element.length}).length} Words, {text.length} Characters</p>
       <p>{0.011 * text.split(" ").filter((element)=>{return element.length}).length } Minutes read</p>
        <h1>Your Text Preview</h1>
        <p>{text.length>0?text:"Write  something in the above textBox to preview it here"}</p>
    </div>
    </>
  )
}

