import '../styles/login.scss';
import Button from '../components/Botao/button';
import logo from '../assets/images/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
//import { useHistory } from "react-router-dom";

export default function Login(){

    return(
        <div className="loginFundo">
            <div className='loginPrincipal'>
                <div className="loginTitulo">
                    <h1>FastByte</h1>
                    <img src={logo} alt="logo"/>
                </div>
                <div className="loginBox">
                    <div className="loginLema">
                        <span>Bem-vindo(a) a melhor hamburgueria</span>
                        <span>delivery de todo o Cefet-RJ</span>
                    </div>
                    <div className="textoLogin">
                        <p>Faça seu login</p>
                    </div>
                    <div className="loginInputs">
                        <input type='email' placeholder="Digite seu email"/>
                        <input type='password' placeholder="Digite sua senha"/>
                    </div>
                    <div className="loginBotao">
                        <Link to='/cadastro'>
                            <Button texto= "Cadastre-se"></Button> 
                        </Link>
                        <Link to='/cardapio'>
                            <Button texto= "Entrar"></Button> 
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}