import "../styles/cadastro.scss";
import Button from "../components/Botao/button";
import logo from "../assets/images/logo.png";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { CadastroAtom } from "../states/cadastro";
import { StartRegisterFn } from "../services/backend";

export default function Cadastro() {
  const [cadastroForm, setCadastroForm] = useRecoilState(CadastroAtom);

  function setCadastroField(campo, event) {
    let tempForm = { ...cadastroForm };
    tempForm[campo] = event.target.value;
    setCadastroForm(tempForm);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const data = StartRegisterFn(cadastroForm);

    if(!data.status){
      alert(data.message);
      return;
    }else{
      sessionStorage.setItem("cadastroBuffer", JSON.stringify(cadastroForm));
      window.location.href = "/endereco";
    }
  }

  return (
    <div className="cadastroFundo">
      <div className="cadastroPrincipal">
        <div className="cadastroTitulo">
          <h1>FastByte</h1>
          <img src={logo} alt="logo" />
        </div>
        <div className="cadastroBox">
          <div className="textoCadastro">
            <p>Faça seu cadastro</p>
          </div>
          <form onSubmit={handleSubmit} className="cadastroInputs">
            <input
              type="text"
              placeholder="Digite seu nome de usuário"
              value={cadastroForm.userName}
              onChange={(e) => setCadastroField("userName", e)}
            />
            <input
              type="email"
              placeholder="Digite seu email"
              value={cadastroForm.email}
              onChange={(e) => setCadastroField("email", e)}
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              value={cadastroForm.password}
              onChange={(e) => setCadastroField("password", e)}
            />
            <input
              type="password"
              placeholder="Confirme sua senha"
              value={cadastroForm.confirmPassword}
              onChange={(e) => setCadastroField("confirmPassword", e)}
            />

            <div>
              <Button type="submit" texto="Cadastrar" />
              <Link to="/login">
                <Button texto="Cancelar" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
