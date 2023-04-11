import Cabecalho from '../components/Cabecalho/cabecalho';
import ItensBox from '../components/Item/Item';
import Navbar from '../components/Navbar/Navbar';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CombosAtom, BebidasAtom, SobremesasAtom, itemSelecionadoAtom, ModalItemSelector } from '../states/cardapio';
import '../styles/cardapio.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Botao/button";
import logo from "../assets/images/logo.png";
import Modal from "react-modal";

export default function Cardapio(){

    const [item] = useRecoilState(itemSelecionadoAtom);
    const [comboBox] = useRecoilState(CombosAtom)
    const [bebidasBox] = useRecoilState(BebidasAtom)
    const [sobremesasBox] = useRecoilState(SobremesasAtom)
    
    return(
        <div className='cardapioPrincipal'>
            <ModalComponent isOpen={!!item} overlayClassName="modal-overlay" className="modal-content"/>
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

function ModalComponent ({isOpen, overlayClassName, className}) {
    
    const [_, setItem] = useRecoilState(itemSelecionadoAtom);

    const ModalInfo = useRecoilValue(ModalItemSelector);

    return (
        <Modal
            isOpen={isOpen}
            overlayClassName={overlayClassName}
            className={className}
        > 
            <div className='modal-topo'>
                <button onClick={() => {
                    console.log(ModalInfo)
                        setItem(null);
                    }} className='btn-voltar'> 
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <h2>{ModalInfo?.nome}</h2>
            </div>
            <div className='modal-itens'>
                <div className='modal-descricao'> 
                {/* essa aqui fica na esquerda, com flex-direction column */}
                {
                    ModalInfo.tipo === 'combo'
                    ? ModalInfo.itens.map(v => (<p>{v}</p>))
                    : (<p>1x {ModalInfo.nome}</p>)
                }
                <p>{ModalInfo.preco}</p>
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