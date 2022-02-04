const Button = ({ text, className, actionOnClick }) => {
  return (
    <button type="button" className={className} onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
