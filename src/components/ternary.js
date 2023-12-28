import { useState } from "react";

function UserLogin() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const toggleLog = () => {
    setIsLoggedin(!isLoggedin);
  };
  return (
    <>
      {!isLoggedin ? (
        <div>
          <h2>Please log in</h2>
          <button onClick={toggleLog}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Hello User</h2>
          <button onClick={toggleLog}>Log Out</button>
        </div>
      )}
    </>
  );
}

export default UserLogin;
