import "./button.css";

export default function Button({ texto, onClick }) {
  return (
    <button onClick={onClick} className="menuBotao">
      {texto}
    </button>
  );
}
