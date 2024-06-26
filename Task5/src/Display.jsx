import "./dis.css";

// eslint-disable-next-line react/prop-types
const Display = ({ input, result }) => {
  return (
    <div className="display">
      <div className="input">{input}</div>
      <div className="result">{result !== null ? `= ${result}` : ""}</div>
    </div>
  );
};

export default Display;
