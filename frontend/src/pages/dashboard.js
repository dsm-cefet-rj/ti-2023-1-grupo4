import React from 'react'
import Cabecalho from '../components/CabecalhoAdm/cabecalhoadm'
import '../styles/dashboard.scss'
import Button from "../components/Botao/button";

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




  return (
    <div className='principalDashboard'>
      <div className="sticky-pos">
        <Cabecalho />
      </div>
      <main className='containerDashboard'>
          <div className='pdd'>
            <div className='add-item'>
              <h1>jajajaj</h1>
              <Button></Button>
            </div>
            <div className='pdd-recebidos'>

            </div>
            <div className='pdd-preparar'>

            </div>
            <div className='pdd-recebidos'>

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
