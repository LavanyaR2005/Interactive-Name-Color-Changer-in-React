import React, { useState } from 'react';
import './App.css'; // Importing external CSS file

function App() {
  const [uname, setUname] = useState("Ramesh");
  const [color, setColor] = useState("green");

  const changeColor = () => {
    const colors = ["red", "blue", "purple", "orange", "teal"];
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div className="container">
      <h1 style={{ color: color, transition: "color 0.5s ease-in-out" }}>
        Name: {uname}
      </h1>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setUname(e.target.value)}
        className="name-input"
      />

      <button type="button" onClick={changeColor} className="color-button">
        Change Color
      </button>
    </div>
  );
}

export default App;
