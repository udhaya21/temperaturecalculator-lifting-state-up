import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

function TemperatureInputOld(props) {
  const [temperature, setTemperature] = useState("");
  const scaleNames = { c: "Celsius", f: "Fahrenheit" };

  const handleChange = (e) => {
    setTemperature(e.target.value);
  };
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[props.scale]}</legend>
      <input value={temperature} onChange={handleChange} />
      <BoilingVerdict celsius={parseFloat(temperature)} />
    </fieldset>
  );
}

export default TemperatureInputOld;
