// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Button from "./Button";
import Display from "./Display";
import "./cal.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  // Function to handle keyboard key presses
  const handleKeyDown = (event) => {
    const { key } = event;
    if (/\d/.test(key)) {
      setInput(input + key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      setInput(input + key);
    } else if (key === "Enter" || key === "=") {
      handleCalculate();
    } else if (key === "Escape") {
      handleClear();
    }
  };

  // Effect to add event listener on mount
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Using eval for simplicity, but it's not recommended for production code
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="buttons">
        <Button value="1" onClick={() => handleClick("1")} />
        <Button value="2" onClick={() => handleClick("2")} />
        <Button value="3" onClick={() => handleClick("3")} />
        <Button value="4" onClick={() => handleClick("4")} />
        <Button value="5" onClick={() => handleClick("5")} />
        <Button value="6" onClick={() => handleClick("6")} />
        <Button value="7" onClick={() => handleClick("7")} />
        <Button value="8" onClick={() => handleClick("8")} />
        <Button value="9" onClick={() => handleClick("9")} />
        <Button value="0" onClick={() => handleClick("0")} />
        <Button value="+" onClick={() => handleClick("+")} />
        <Button value="-" onClick={() => handleClick("-")} />
        <Button value="*" onClick={() => handleClick("*")} />
        <Button value="/" onClick={() => handleClick("/")} />
        <Button value="C" onClick={handleClear} />
        <Button value="=" onClick={handleCalculate} />
      </div>
    </div>
  );
};

export default Calculator;
