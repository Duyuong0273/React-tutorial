import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponents";
import ReactForm from "./Example/ReactForm";

/*
2 components: class components
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World Reac.js</p>
        {/* <MyComponent /> */}
        <ReactForm />
        {/* <MyComponent> </MyComponent> */}
      </header>
    </div>
  );
}

export default App;
