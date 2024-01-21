import "./App.css";
import Navbar from './components/Navbar'
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title='random bullshit go' />
      <div className="container my-3">
        <TextForm heading="Enter Text" />
      </div>
    </>
  );
}

export default App;
