

import "./App.css";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";




function App() {
  const handlealert= (mess)=>{
alert(mess)
}
  // const [toAler, settoAler] = useState(null)
  return (
    <>
    
     
   <Navbar  contectText="Contect" tittle="TextUtels" homeText="Home" aboutText="About" />
     < Textform alering= {handlealert} />
    
    
    <About/>
   
    
      
    </>
  );
}

export default App;
