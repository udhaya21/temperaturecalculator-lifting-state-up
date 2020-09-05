import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import Utils from "./Utils";
import BoilingVerdict from "./BoilingVerdict";

function Calculator(props) {
  const [scale, setScale] = useState("c");
  const [temperature, setTemperature] = useState("");

  const handleCelsiusChange = (temperature) => {
    setScale("c");
    setTemperature(temperature);
  };

  const handleFahrenheitChange = (temperature) => {
    setScale("f");
    setTemperature(temperature);
  };

  const celsius =
    scale === "f"
      ? Utils.tryConvert(temperature, Utils.toCelsius)
      : temperature;
  const fahrenheit =
    scale === "c"
      ? Utils.tryConvert(temperature, Utils.toFahrenheit)
      : temperature;
  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

export default Calculator;
