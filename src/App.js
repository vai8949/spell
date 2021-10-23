
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
const [mode, setMode]=useState('light');
const [alert, setAlert]=useState(null);
const showalert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null)
  },1500)
}

const togglemode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='rgb(13 60 56)';
    showalert("Dark mode is enabled",'success')
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showalert("light mode is enabled",'success')
  }
}
  return (
    <>
    {/* <Router> */}
   <Navbar title ="TEXTUtils"  mode={mode} togglemode={togglemode} />
   <Alert alert={alert} />
   <div className="container">
   
  
  {/* <Switch>
          <Route path="/about"> */}
            {/* <About />
          </Route> */}
      
          {/* <Route path="/"> */}
          <Textform mode={mode} showalert={showalert}/>
          {/* </Route>
        </Switch> */}
   </div>
   {/* </Router> */}
    </>
  );
}

export default App;
