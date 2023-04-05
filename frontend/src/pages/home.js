import '../styles/home.scss';
import logo from '../assets/images/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){

    return(
        <div className="homeFundo">
            <div className='homePrincipal'>
                <div className="homeTitulo">
                    <h1>FastByte®</h1>
                    <img src={logo} alt="logo"/>
                </div>
                <div className="homeBox">
                    <div className="homeLema">
                        <span>Bem-vindo(a) a melhor hamburgueria</span>
                        <span>delivery de todo o Cefet-RJ</span>
                    </div>
                    <div className="textoHome">
                        <p>Faça seu login ou cadastre-se</p>
                    </div>
                    <div className="homeBotao">
                        <Link to='/login'>
                            <button>Fazer login</button>
                        </Link>
                        <Link to='/cadastro'>
                            <button>Fazer cadastro</button>
                        </Link>
                        <Link to='/'>
                            <button>Sobre o restaurante</button>
                        </Link>
                    </div>
                </div>
            </div> 
        </div>
    )
}

