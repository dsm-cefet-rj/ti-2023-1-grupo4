import React, { useState } from 'react'
import '../styles/adicionaritem.scss'
import Cabecalho from '../components/CabecalhoAdm/cabecalhoadm'
import Button from '../components/Botao/button'
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import api from '../services/api';

export default function adicionaritem() {

    const [tipo, setTipo] = useState('combo');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState(0);

    const navigate = useNavigate();

    async function AddItem (e) {
        e.preventDefault();
        const payload = {
            tipo,
            name:nome,
            price: parseFloat(preco.replace(/\,/g, '.')),
            itens: tipo === 'combo' ? descricao.split(',').map(v => v.trim()) : null,
            quantity:0
        };

        const resp = await api.post("/item", payload);
        alert('Item adicionado com sucesso!');
        navigate(0);
    }

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
            <select value={tipo} id="tipo-item" onChange={(e) => {setTipo(e.target.value); setDescricao('')}}>
                <option value="combo">Combos</option>
                <option value="bebida">Bebidas</option>
                <option value="sobremesa">Sobremesas</option>
            </select>
            <label for="nome-item">Nome do Item</label>
            <input value={nome} type="text" id="nome-item" placeholder="Digite o nome do item" onChange={(e) => setNome(e.target.value)}/>
            
            {tipo === 'combo' ?
                <>
                    <label for="descricao-item">Descrição do Item</label>
                    <textarea value={descricao} placeholder="Separar itens por  ' , '" id="descricao-item" rows="3" onChange={(e) => setDescricao(e.target.value)} />
                </>
            : null }
            <label for="preço-item">Preço</label>
            <input value={preco} type="text" id="preço-item" placeholder="Digite o preço do item" onChange={(e) => setPreco(e.target.value)}/>
            <Button class="adicionar-item__button" texto="Adicionar item" onClick={AddItem}></Button>
        </div>
    </div>
</div>
  )
}


  

 



