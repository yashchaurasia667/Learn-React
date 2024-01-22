import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from './components/Navbar'
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = 'white'
      showAlert('Dark mode enabled!', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('Dark mode disabled!', 'success')
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, alertType) => {
    setAlert({
      message: message,
      type: alertType
    });

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
      <Navbar title='random bullshit go' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter Text" />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
