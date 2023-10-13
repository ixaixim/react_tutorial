import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Neel"
  const handleNameChange = () => {
    const names = ["Neel", "John", "Jane"]
    const int = Math.floor(Math.random() * 3) // random number between 0 and 2
    return names[int]
  }
  return (
    // note: this is JSX, not HTML
    // JSX: JavaScript XML
    // Doesn't have class attribute, instead uses className
    // Allows to write HTML-like syntax in JS
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <p>We define and add variables to JSX.</p>
       {/* <p>{a:1, b:2}</p>  // this is an error and a comment in JSX */}
      <p>This is a variable: {name}</p>
      <p>Hello {handleNameChange()}!</p>
      </header>
    </div>
  );
}

export default App;
