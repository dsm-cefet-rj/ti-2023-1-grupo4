import "./navbar.scss";

export default function Navbar() {
  function Position(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
      do {
        currenttop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return [currenttop];
    }
  }

  function scrollToComponent(id) {
    let pos = Position(document.getElementById(id));
    window.scrollTo(0, pos - 320);
    console.log(pos);
  }

  return (
    <div className="navBarCentro">
      <button onClick={() => scrollToComponent("combos")}>Combos</button>
      <button onClick={() => scrollToComponent("bebidas")}>Bebidas</button>
      <button onClick={() => scrollToComponent("sobremesas")}>
        Sobremesas
      </button>
    </div>
  );
}
