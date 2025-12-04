import { useState, createContext } from "react";
import "./App.css";
import ChildA from "./ChildA";

export const UserContext = createContext(null);

const App = () => {
  const [username, setUsername] = useState("shan");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <div className="app-container">
        <ChildA />
      </div>
    </UserContext.Provider>
  );
};

export default App;
