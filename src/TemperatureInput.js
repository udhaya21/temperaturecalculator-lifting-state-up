import React from "react";
import BoilingVerdict from "./BoilingVerdict";

function TemperatureInput(props) {
  const scaleNames = { c: "Celsius", f: "Fahrenheit" };

  const temperature = props.temperature;
  const scale = props.scale;

  const handleChange = (e) => {
    props.onTemperatureChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput;
