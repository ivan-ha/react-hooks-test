import React from "react";
import "./App.css";
import { useRandomUsers } from "./useRandomUsers";

const App = () => {
  const users = useRandomUsers();

  return (
    <div className="App">
      <header className="App-header">
        <ol>
          {users &&
            users.map(({ name, login }) => (
              <li key={login.uuid}>
                {`${name.title} ${name.first} ${name.last}`}
              </li>
            ))}
        </ol>
      </header>
    </div>
  );
};

export default App;
