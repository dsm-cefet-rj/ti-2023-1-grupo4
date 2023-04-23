import React from 'react'
import '../styles/adicionaritem.scss'
import Cabecalho from '../components/CabecalhoAdm/cabecalhoadm'
import Button from '../components/Botao/button'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function adicionaritem() {
  return (
     <div>
        <Cabecalho></Cabecalho> 
        <div>
            <Link to="/dashboard" className='voltar-principal'>
                <button className='btn-voltar'><FontAwesomeIcon icon={faArrowLeft} className='icone-seta'/></button>
            </Link>
        </div>
        <div class="adicionar-item">
        
            
        <h1>Adicionar Item</h1>
        <div class="adicionar-item__form-container">
            <label for="tipo-item">Tipo de Item</label>
            <select id="tipo-item">
            <option value="combos">Combos</option>
            <option value="bebidas">Bebidas</option>
            <option value="sobremesas">Sobremesas</option>
            </select>
            <label for="nome-item">Nome do Item</label>
            <input type="text" id="nome-item" placeholder="Digite o nome do item"/>
            <label for="descricao-item">Descrição do Item</label>
            <textarea id="descricao-item" rows="3"></textarea>
            <label for="preço-item">Preço</label>
            <input type="text" id="preço-item" placeholder="Digite o preço do item"/>
            <Button class="adicionar-item__button" texto="Adicionar item"></Button>
        </div>
    </div>
</div>
  )
}


  

 



