import './item.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Modal from 'react-modal'
import { useRecoilState } from 'recoil'

Modal.setAppElement("#root");

export default function ItemBox(props){

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(){
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

    return(
        <div className={props.className}>
            <div className='comboBox' id={props.id}>
                <ul>

                    <li>
                        <h1>{props.tipo}</h1>
                        {
                            props.list.map(
                                (ev) => ev.tipo === 'combo' ?
                                <Combo nome={ev.nome} preco={ev.preco} itens={ev.itens}/> :
                                <Item nome={ev.nome} preco={ev.preco} descricao={ev.descricao}/>
                            )
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}

function Item(props){
  return(
    <div className='comboItensBox'>
      <ul>
          <li>
            <a>
                <h2>{props.nome}</h2>
                <p className="item-text-content">{props.descricao}</p>
                <p className="item-text-content">{props.preco}</p>
            </a>
          </li>
      </ul>
    </div>
  )
}

function Combo(props){
    return(
        <div className='comboItensBox'>
            <ul>
                <li>
                  <a>
                    <h2>{props.nome}</h2>
                    {props.itens.map( ev => {
                        return <p className="item-text-content">{ev}</p>
                    })}
                    <p className="item-text-content">{props.preco}</p>
                  </a>
                </li>
            </ul>
        </div>
    )
}