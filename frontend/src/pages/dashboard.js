import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/CabecalhoAdm/cabecalhoadm'
import '../styles/dashboard.scss'
import '../styles/dashboardRel.scss'
import Button from "../components/Botao/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck, faLoader, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { GetPedidos } from '../services/backend';


export default function dashboard() {
  const list = [
    {
      name: 'Combo 1',
      vendidos: '10'
    },
    {
      name: 'Batata',
      vendidos: '9'
    },
    {
      name: 'Combo 2',
      vendidos: '7'
    },
    {
      name: 'Pudim',
      vendidos: '3'
    },
    {
      name: 'Brownie',
      vendidos: '2'
    },
    {
      name: 'Combo 3',
      vendidos: '1'
    }
  ];

  const [pedidos, setPedidos] = useState([]);

  function DescFN(item) {
    return JSON.stringify(item.carrinho.map(v => v.nome)).replace(/(\[)|(\])|(\")|(\')/g, '');
  }

  function ItemUpdateStatus (index, status) {
    let p = [...pedidos];
    p[index]['status'] = status;

    setPedidos(p);
  }

  return (
    <div className='principalDashboard'>
      <div className="sticky-pos">
        <Cabecalho />
      </div>
      <main className='containerDashboard'>
          <div className='pdd'>
            <div className='add-item'>
              <h2>Modificar cardápio: </h2>
              <hr/>
              <Link to="/adicionaritem">
                <Button texto="Adicionar item"></Button>
              </Link>
              <Link to="/removeritem">
                <Button texto="Remover item"></Button>
              </Link>
              
            </div>
            <div className='pdd-recebidos'>
              <h2>Pedidos recebidos: </h2>
              <hr/>
              <ul>
              {pedidos
              .map((v, i) => ({...v, fn1:() => ItemUpdateStatus(i, -1), fn2:() => ItemUpdateStatus(i, 1)}))
              .filter(v => v.status === 0)
              .map((item) =>
                <li className='pdd-recebidos-lista'>
                    <div className='pdd-recebidos-lista-itens'>
                      <h3>{item.email}</h3>
                      <p>{DescFN(item)}</p>
                    </div>
                    <div className='pdd-recebidos-lista-button'>
                      <button  onClick={item.fn1}> <FontAwesomeIcon icon={faXmark} style={{color: "#000000",}} /> </button>
                      <button onClick={item.fn2}> <FontAwesomeIcon icon={faCheck} style={{color: "#000000",}} /> </button>
                    </div>
                  </li>
                  
              )}
              </ul>
            </div>
            <div className='pdd-preparar'>
              <h2>Pedidos para preparar: </h2>
              <hr/>
              <ul>
              {pedidos
              .map((v, i) => ({...v, fn1:() => ItemUpdateStatus(i, 2)}))
              .filter(v => v.status === 1)
              .map((item) =>
                <li className='pdd-preparar-lista'>
                    <div className='pdd-preparar-lista-itens'>
                      <h3>{item.email}</h3>
                      <p>{JSON.stringify(item.carrinho.map(v => v.nome)).replace(/(\[)|(\])|(\")|(\')/g, '')}</p>
                    </div>
                    <div className='pdd-preparar-lista-button'>
                      <Button texto="Sair para entrega" onClick={item.fn1}></Button>
                  </div>
                  </li>
              )}
              </ul>
            </div>
            <div className='pdd-entregues'>
              <h2>Pedidos entregues: </h2>
              <hr/>
              <ul>
              {pedidos
              .filter(v => v.status === 2)
              .map((item) =>
                <li className='pdd-entregues-lista'>
                    <div className='pdd-entregues-lista-itens'>
                    <div className='pdd-preparar-lista-itens'>
                      <h3>{item.email}</h3>
                      <p>{JSON.stringify(item.carrinho.map(v => v.nome)).replace(/(\[)|(\])|(\")|(\')/g, '')}</p>
                    </div>
                      <FontAwesomeIcon size={'2x'} icon={faCheck} style={{color: "#0FF190", marginLeft:'5px'}}/>
                    </div>
                  </li>
              )}
              </ul>
            </div>
          </div>
          <div className='relatorios'>
            <div className='itensMaisVendidos'>
              <h1>Itens mais vendidos:</h1>
              <ol>
                {list.map((item) =>
                  <li className='itensMaisVendidosLista'>
                    <h2>{item.name}</h2>
                    <h3>{item.vendidos}</h3>
                  </li>
                )}
              </ol>
            </div>
            <div className='ticketMedio'>
              <h1>Ticket médio:</h1>
              <div className='ticketMedioPreco'>
                <p>R$ 18,00</p>
              </div>
            </div>
            <div className='vendasSemanais'>
              <h1>Vendas semanais:</h1>
              <div className='vendasSemanaisQtd'>
                <p>45</p>
              </div>
            </div>
          </div>  
      </main>
    </div>
  )       
}
