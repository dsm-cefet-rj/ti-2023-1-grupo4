import '../styles/cadastro.scss'
import Button from '../components/Botao/button';
import logo from '../assets/images/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';


export default function Cadastro(){

    return(
        <div className="cadastroFundo">
            <div className='cadastroPrincipal'>
                <div className="cadastroTitulo">
                    <h1>FastByte</h1>
                    <img src={logo} alt="logo"/>
                </div>
                <div className="cadastroBox">
                    <div className="textoCadastro">
                        <p>Faça seu cadastro</p>
                    </div>
                    <div className="cadastroInputs">
                        <input type='text' placeholder="Digite seu nome de usuário"/>
                        <input type='email' placeholder="Digite seu email"/>
                        <input type='password' placeholder="Digite sua senha"/>
                        <input type='password' placeholder="Confirme sua senha"/>
                    </div>
                    <div className="cadastroBotao">
                        <Link to='/login'>
                            <Button texto= "Cancelar"/>
                        </Link>
                        <Link to='/endereco'>
                            <Button texto= "Cadastrar"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}