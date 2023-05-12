import React from 'react';
import '../css/Form.css';

const Slider = ({ value }) => {
  const fillStyle = {
    width: `${value}%`,
  };

  return (
    <div className="slider-container">
      <input id='sliderInput' type="range" min="0" max="100" value={value}  />
      <div className="slider-fill" style={fillStyle}></div>
    </div>
  );
};

export default Slider;
