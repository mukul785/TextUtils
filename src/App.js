import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { ColorThemeProvider } from './Components/ColorTheme';
import { useState } from 'react';

function App() {

  const [alert,setAlert] = useState(null);
  const displayAlert=(message,type)=>{
    setAlert({
      msg: message,
      typ: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <ColorThemeProvider>
      <NavBar title="TextEdit"/>
      <Alert alert={alert}/>
      <div className="container">
        <TextForm displayAlert={displayAlert} heading="Enter the text to edit: "/>
      </div>
    </ColorThemeProvider>
  );
}

export default App;
