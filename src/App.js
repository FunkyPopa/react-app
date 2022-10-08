import './App.css';
import Simpsons from "./components/Chars/Simpsons";
import Char2 from "./components/Chars/RaM Chars";


function App() {
  return (
      <div className="main">

        <h2 className="header">The Simpsons</h2>
        <Simpsons/>

        <h2 className="header">Rick and Morty</h2>
        <Char2/>

      </div>
  );
}

export default App;
