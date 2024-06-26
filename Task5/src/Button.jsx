import "./btn.css";

// eslint-disable-next-line react/prop-types
const Button = ({ value, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
