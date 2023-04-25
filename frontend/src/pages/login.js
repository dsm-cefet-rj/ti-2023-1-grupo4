import "../styles/login.scss";
import Button from "../components/Botao/button";
import logo from "../assets/images/logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { inicializaCarrinho } from "../services/carrinho";
import { LoginFn } from "../services/backend";
import { useRecoilState } from "recoil";
//import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const data = LoginFn({email, password});
    if(data.status){
      inicializaCarrinho();
      if(email === 'admin@fastbyte.com'){
        window.location.href = "/dashboard";
      }else{
        window.location.href = "/cardapio";
      }
    }else{
      alert(data.message);
    }
  }

  return (
    <div className="loginFundo">
      <div className="loginPrincipal">
        <div className="loginTitulo">
          <h1>FastByte</h1>
          <img src={logo} alt="logo" />
        </div>
        <div className="loginBox">
          <div className="loginLema">
            <span>Bem-vindo(a) a melhor hamburgueria</span>
            <span>delivery de todo o Cefet-RJ</span>
          </div>
          <div className="textoLogin">
            <p>Faça seu login</p>
          </div>
          <form onSubmit={handleSubmit} className="loginInputContainer">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Digite seu Email..."
            />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Digite sua senha..."
            />
            <div>
              <Button type="submit" texto="Entrar" />
              <Link to="/cadastro">
                <Button texto="Cadastre-se" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
