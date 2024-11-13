import logo from "./logo.svg";
import "./App.css";
import Button from "./assets/components/button";
import Avatar from "./assets/components/avatar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my app</h1>
        <Avatar />
        <Button />
      </header>
    </div>
  );
}

export default App;
