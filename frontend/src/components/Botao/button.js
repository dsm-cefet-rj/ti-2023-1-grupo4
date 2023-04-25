import "./button.css";

export default function Button({ texto, onClick, disabled, style }) {
  return (
    <button onClick={onClick} className="menuBotao" disabled={disabled} style={style}>
      {texto}
    </button>
  );
}
