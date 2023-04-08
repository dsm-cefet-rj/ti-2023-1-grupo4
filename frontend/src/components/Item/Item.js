import './item.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-modal';
import logo from '../../assets/images/logo.png';
import { useRecoilState } from 'recoil';
import '../../styles/modal.scss';
import Button from '../../components/Botao/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
  const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }
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
      <div className='Container'>
              <button onClick={openModal} className='abrirModal'>Adicionar</button>
              <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              overlayClassName="modal-overlay"
              className="modal-content"
              > 
                <div className='modal-topo'>
                  <button onClick={closeModal} className='btn-voltar'> 
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <h2>Combo 1</h2>
                </div>
                <div className='modal-itens'>
                  <div className='modal-descricao'> 
                    {/* essa aqui fica na esquerda, com flex-direction column */}
                    <p>Descrição</p>
                    <p>preço</p>
                  </div>
                  <div className='modal-img'>
                      {/* essa aqui fica na direita, só com a img */}
                    <img src={logo} alt="logo" className='logoModal'/>
                  </div>
                </div>
                <Button texto="Adicionar" className='modal-add'/>
              </Modal>
            </div>
    </div>
  )
}

function Combo(props){
  const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }
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
            <div className='Container'>
              <button onClick={openModal} className='abrirModal'>Adicionar</button>
              <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              overlayClassName="modal-overlay"
              className="modal-content"
              > 
                <div className='modal-topo'>
                  <button onClick={closeModal} className='btn-voltar'> 
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <h2>Combo 1</h2>
                </div>
                <div className='modal-itens'>
                  <div className='modal-descricao'> 
                    {/* essa aqui fica na esquerda, com flex-direction column */}
                    <p>Descrição</p>
                    <p>preço</p>
                  </div>
                  <div className='modal-img'>
                      {/* essa aqui fica na direita, só com a img */}
                    <img src={logo} alt="logo" className='logoModal'/>
                  </div>
                </div>
                
                <div className='modal-add'>
                  <Button texto="Adicionar"/>
                </div>
                {/* <button onClick={closeModal}> Voltar </button> */}
              </Modal>
            </div>
        </div>
    )
}