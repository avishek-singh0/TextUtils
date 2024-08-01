import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  

  return (
    <>
          <Navbar title="TextUtils" aboutText="About" />
          <Alert alert={alert}/>
          <div className="container my-3">

            {/* <About mode={mode}/> */}
            <TextForm showAlert={showAlert} heading="TextUtils - Word counter, character counter" /> 

          </div>
    </>
  );
}

export default App;
