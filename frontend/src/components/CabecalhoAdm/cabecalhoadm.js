import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./cabecalhoadm.scss";
import { CombosAtom } from "../../states/cardapio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";



export default function Cabecalho() {
  return (
    <div className="containerAdm">
      <header className="cabecalhoAdm">
        <div className="cabecalhoAdm-brand">
          <img src={logo} alt="Logo" />
          <h1>FastByte</h1>
        </div>  
      </header>
    </div>
  );
}