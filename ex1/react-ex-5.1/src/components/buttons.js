const Button = ({ text, isBold }) => {
  return (
    <div className="container">
      <button className={isBold === true ? 'isBold' : ""}>{text}</button>
    </div>
  );
};

export default Button;

