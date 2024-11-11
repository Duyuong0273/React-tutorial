import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponents";

/*
2 components: class components
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World Reac.js</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
        {/* <MyComponent> </MyComponent> */}
      </header>
    </div>
  );
}

export default App;
