import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./cabecalho.scss";
import { CombosAtom } from "../../states/cardapio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";



export default function Cabecalho() {

  function logoffFn() {
    sessionStorage.removeItem('fastbyte_token');
    window.location.href = '/'
  }

  return (
    <div className="flex-column">
      <header className="cabecalho">
        <div className="cabecalho-brand">
          <img src={logo} alt="Logo" />
          <h1>FastByte</h1>
        </div>
        <div id="navbar-right">
          {/* Menu desktop */}
          <div id="menu" className="menu desk hide">
            <Link to={"/cardapio"} className="menu-item">
              <button className="menu-btn text-gradient">Cardápio</button>
            </Link>
            <Link to={"/perfil"} className="menu-item">
              <button className="menu-btn text-gradient">Meu Perfil</button>
            </Link>
            <Link to={"/statuspedido"} className="menu-item">
              <button className="menu-btn text-gradient">
                Status do Pedido
              </button>
            </Link>
            <Link to={"#"}>
              <button className="menu-btn text-gradient menu-item" onClick={logoffFn}>Sair</button>
            </Link>
          </div>
          <button
            className="expand-btn text-gradient"
            onClick={() => {
              document
                .getElementsByClassName("menu")[0]
                .classList.toggle("hide");
              document
                .getElementsByClassName("menu")[1]
                .classList.toggle("hide");
            }}
          >
            Menu
          </button>
          <Link to={"/carrinho"}>
            <button
            className="expand-btn text-gradient" style={{marginLeft: 5}}>
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffab00",}} />         
          </button>
          </Link>
          
          
          </div>
      </header>

      {/* Menu mobile */}
      <div id="menu" className="mobile menu hide">
        <Link to={"/cardapio"} className="menu-item">
          <button className="menu-btn-mobile text-gradient">Cardápio</button>
        </Link>
        <Link to={"/perfil"} className="menu-item">
          <button className="menu-btn-mobile text-gradient">Meu Perfil</button>
        </Link>
        <Link to={"/statuspedido"} className="menu-item">
          <button className="menu-btn-mobile text-gradient">
            Status do Pedido
          </button>
        </Link>
        <Link to={"#"} className="menu-item">
          <button className="menu-btn-mobile text-gradient" onClick={logoffFn}>Sair</button>
        </Link>
      </div>
    </div>
  );
}
