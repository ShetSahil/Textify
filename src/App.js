// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
// import { setTimeout } from 'timers';
// import { setTimeout } from 'timers/promises';
import {
  BrowserRouter as Router,
  Switch,
  Route

  
} from 'react-router-dom';




function App() {
  const[mode,setMode]=useState('light')
  const toggleMode=() =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
      // showAlert(" darkmode enabled","success")
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      // showAlert(" lightmode enabled ","success")
    }
  }
  // const[text ,settext]=useState('light')

  const[alert ,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      showAlert(null);
    }, 1500);
   
  }


  
  return (
    <>
    {/* <Router> */}
    <Navbar title="Textify" about="About" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}/>
    {/* <Navbar></Navbar> */}
    <TextForms heading="Enter The Text To Analyze " mode={mode} showAlert={showAlert}/>
    {/* <About/> */}
      {/* <Switch>

      <Route path="/">
        <TextForms heading="Enter The Text To Analyze " mode={mode} showAlert={showAlert}/>
            
      </Route>
      <Route path="/about" mode={mode}>
        <About/>
      </Route>
      </Switch>
    </Router> */}
    </>
  );
}

export default App;
