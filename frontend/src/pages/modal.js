import React from 'react'
import Button from '../components/Botao/button';
import logo from '../assets/images/logo.png';
import '../styles/modal.scss'
import Cabecalho from '../components/Cabecalho/cabecalho'
import { useState } from 'react'
import Modal from "react-modal"

Modal.setAppElement("#root");


export default function modal() {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(){
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }


  return (
    <div>
      <div className='sticky-pos'>
        <Cabecalho/>
      </div>
      <div className='Container'>
        <button onClick={openModal}>Open modal</button>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
        >
          <img src={logo} alt="logo" className='logoModal'/>
          <h2>Combo 1</h2>
          <p>Descrição</p>
          <p>preço</p>
          <Button texto="Adicionar"/>
          <button onClick={closeModal}> Voltar </button>
        </Modal>
      </div>
    </div>
  )
}
