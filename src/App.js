import './App.css';

import Users from "./components/User Components/Users/Users";
import Launches from "./components/SpaceX Components/Launches/Launches";

function App() {
  return (
      <div className="App">
        <div className="box">
          <h2 className="header">Users</h2>
          <Users/>
        </div>

        <div className="box">
            <h2 className="header">Launches</h2>
            <Launches/>
        </div>
      </div>
  );
}

export default App;
