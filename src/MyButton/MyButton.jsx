import "./MyButton.css";

export default function MyButton({ children , onClick }) {
  return (
    <button onClick={onClick} className="button-82-pushable" role="button">
      <span className="button-82-shadow"></span>
      <span className="button-82-edge"></span>
      {children === "PLUS +" && <span className="button-82-front text">{children}</span>}
      {children === "- MINUS" && <span className="button-82-front-minus text">{children}</span>}
    </button>
  );
}
