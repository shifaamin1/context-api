import { useContext } from "react";
import { UserContext } from "./App";

const ChildD = () => {
  const { username, setUsername } = useContext(UserContext);

  return (
    <div className="child-d-container">
      <h1 className="username-display">{username}</h1>

      <button
        className="update-btn"
        onClick={() => setUsername("shif")}
      >
        Update Name
      </button>
    </div>
  );
};

export default ChildD;
