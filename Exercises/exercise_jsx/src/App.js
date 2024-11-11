import logo from "./logo.svg";
import "./App.css";
import Exercises1 from "./assets/components/exercises_1";
import Exercises5 from "./assets/components/exercises_5";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="react-logo">This is the React logo</p>
        <p className="text-title">(I don't know why it is here either)</p>
        <p className="text-title2">
          The library for web and native user interfaces
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Exercises1 /> */}
        <Exercises5 />
      </header>
    </div>
  );
}

export default App;
