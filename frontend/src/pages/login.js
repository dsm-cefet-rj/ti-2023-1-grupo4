import "../styles/login.scss";
import Button from "../components/Botao/button";
import logo from "../assets/images/logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { inicilizaCarrinho } from "../services/carrinho";
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

    if (!email || !password) {
      alert("Por favor, preencha o email e a senha.");
      return;
    } else {
      let users = localStorage.getItem("fast_byte_usuarios");
      if (!!users) {
        users = JSON.parse(users);
      } else {
        alert("Email ou senha incorretos.");
        return;
      }

      let hasUser = users["usuarios"].find((v) => {
        return v.email === email && v.password === password;
      });

      if (!!hasUser) {
        sessionStorage.setItem(
          "fast_byte_token",
          JSON.stringify({
            email: hasUser.email,
            tipo: hasUser.tipo,
            userName: hasUser.userName,
          }));
        inicilizaCarrinho();
      } else {
        alert("Email ou senha incorretos.");
        return;
      }
      window.location.href = "/cardapio";
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
