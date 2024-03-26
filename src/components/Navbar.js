import React, {useState} from "react";
import PropTypes from "prop-types";



export default function Navbar(props) {
  const [chang, setChange] = useState("Enable DarkMode")
  const [mode, setmode] = useState("white")
  const handleMode=()=>{
    setChange("Enable LiteMode")
    if(mode==='white'){
      setmode("black")
      document.body.style.backgroundColor='grey'
      document.body.style.color="white"
      let textara=document.getElementById("textArea")
      textara.style.backgroundColor='rgb(113, 161, 113)'
      textara.style.border="4px solid green"
      textara.style.color="white"

    }else{   
      setChange("Enable DarkMode")
      setmode("white")
      document.body.style.backgroundColor='white'
      document.body.style.color="black"
      let textara=document.getElementById("textArea")
      textara.style.backgroundColor='white'
      textara.style.border="4px solid green"
      textara.style.color="black"
      textara.style.cursor="viible"
      
    }
    
    
    
  }

  function handleRed(){
      document.body.style.backgroundColor='red'
      document.body.style.color="black"
      let textara=document.getElementById("textArea")
      textara.style.backgroundColor='rgb(113, 161, 113)'
      textara.style.border="4px solid green"
      textara.style.color="black"
    }

    function handleblue(){

      document.body.style.backgroundColor='blue'
      document.body.style.color="black"
      let textara=document.getElementById("textArea")
      textara.style.backgroundColor='rgb(113, 161, 113)'
      textara.style.border="4px solid green"
      textara.style.color="black"
    }

    function handlegreen(){

      document.body.style.backgroundColor='green'
      document.body.style.color="white"
      let textara=document.getElementById("textArea")
      textara.style.backgroundColor='rgb(113, 161, 113)'
      textara.style.border="4px solid green"
      textara.style.color="white"
    }

    function handleyellow(){
      document.body.style.backgroundColor='yellow'
      document.body.style.color="black"
      let textara=document.getElementById("textArea")
      textara.style.backgroundColor='rgb(113, 161, 113)'
      textara.style.border="4px solid green"
      textara.style.color="black"
    }

    function handleghostwhite(){
      document.body.style.backgroundColor='rgb(0, 92, 66)'
      document.body.style.color="white"
      let textara=document.getElementById("textArea")
      textara.style.backgroundColor='rgb(113, 161, 113)'
      textara.style.border="4px solid green"
      textara.style.color="white"
    }

    function handlewhite(){
      document.body.style.backgroundColor='white'
      document.body.style.color="black"
      let textara=document.getElementById("textArea")
      textara.style.backgroundColor='white'
      textara.style.border="4px solid green"
      textara.style.color="black"
      
    }
  return (
    <>
      <nav >
        <div>
          <ul>
            <li>{props.tittle}</li>
            <li>{props.homeText}</li>
            <li>{props.aboutText}</li>
            <li>{props.contectText}</li>
          </ul>
        </div>
        
        <div className="left">
          <div className="colorwhite" onClick={handlewhite}></div>
          <div className="colorPatern" onClick={handleRed}></div>
          <div className="colorblue" onClick={handleblue}></div>
          <div className="colorgreen" onClick={handlegreen}></div>
          <div className="coloryellow" onClick={handleyellow}></div>
          <div className="colorghostwhite" onClick={handleghostwhite}></div>
          <div className="ml-6"> 
          <input type="button" value={chang} onClick={handleMode} />
         </div>
            
          
        </div>
      </nav>
    </>
  );
}

// to declear types of props
Navbar.propTypes = {
  tittle: PropTypes.string,
  homeText: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  contectText: PropTypes.string,
};

// to assign default props
Navbar.defaultProps = {
  tittle: "Set title here",
  homeText: "Set Home here",
  aboutText: "Set About  here",
  contectText: "Set Contect here",
};
