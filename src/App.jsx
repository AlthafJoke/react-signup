import { useState } from "react";

import "./App.css";

const Labels = ["weak", "medium", "strong"];

function App() {
  const [strength, setStrength] = useState("");

  const handleStrength = (password) => {
    console.log(password);

    let strengthIndicator = -1;

    let upper = false,
      lower = false,
      numbers = false;

    for (let index = 0; index < password.length; index++) {
      let char = password.charCodeAt(index);
      if (!upper && char >= 65 && char <= 90) {
        upper = true;
        strengthIndicator++;
      }

      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;
        strengthIndicator++;
      }

      if (!lower && char >= 97 && char <= 122) {
        lower = true;
        strengthIndicator++;
      }
      setStrength(Labels[strengthIndicator] ?? "");
      
    }
  };

  const handleChange = (e) => {
    handleStrength(e.target.value);
    
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>

      <form className="signup-form">
        <div className="email">
          <input
            type="email"
            autoComplete="false"
            className="control"
            spellCheck="false"
            placeholder="email"
          />
          <div id="spinner" className="spinner"></div>
        </div>
        <input
          type="password"
          name="password"
          spellCheck="false"
          className="control"
          placeholder="password"
          onChange={handleChange}
        />
        <div className={`bars ${strength}`}>
          <div></div>
        </div>
        <div className="strength">{strength && <>{strength} password</>}</div>
        <button className="control" type="button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default App;
