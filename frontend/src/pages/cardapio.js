import Cabecalho from '../components/Cabecalho/cabecalho';
import ItensBox from '../components/Item/Item';
import Navbar from '../components/Navbar/Navbar';
import '../styles/cardapio.scss'
import React from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { CombosAtom, BebidasAtom, SobremesasAtom } from '../states/cardapio';


export default function Cardapio(){

    const [comboBox, setComboBox] = useRecoilState(CombosAtom)
    const [bebidasBox, setBebibasBox] = useRecoilState(BebidasAtom)
    const [sobremesasBox, setSobremesasBox] = useRecoilState(SobremesasAtom)
    return(
        <div className='cardapioPrincipal'>
            <div className='sticky-pos'>
                <Cabecalho/>
                <Navbar/>
            </div>
            <ItensBox id='combos' tipo={comboBox.tipo} list={comboBox.list}/>
            <ItensBox id='bebidas' tipo={bebidasBox.tipo} list={bebidasBox.list}/>
            <ItensBox id='sobremesas' tipo={sobremesasBox.tipo} list={sobremesasBox.list}/>
        </div>
    );
}

export default function Modal (props) {
    return (
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
    )
}