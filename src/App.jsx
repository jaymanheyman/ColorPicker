import React, { useState } from "react";

const Color = ({ color, setSelectedColor, selectedColor }) => {
  const handleClick = () => {
    setSelectedColor(color);
  };

  return (
    <div
      className={`${color} ${color === selectedColor ? "selected" : ""}`}
      onClick={handleClick}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="red"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <Color
          color="blue"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <Color
          color="orange"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        {/* Add more Color components for other colors */}
      </div>
    </div>
  );
};

export default App;

