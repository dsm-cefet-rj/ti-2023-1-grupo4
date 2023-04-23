import Cabecalho from '../components/CabecalhoAdm/cabecalhoadm'
import ItensBox from '../components/Item/Item';
import React, {useEffect, useState} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CombosAtom, BebidasAtom, SobremesasAtom, itemSelecionadoAtom, ModalItemSelector } from '../states/cardapio';
import '../styles/cardapio.scss'
import '../styles/removeritem.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Botao/button";
import logo from "../assets/images/logo.png";
import Modal from "react-modal";
import { Link } from "react-router-dom";

export default function removeritem(){
    const [item] = useRecoilState(itemSelecionadoAtom);
    const [comboBox] = useRecoilState(CombosAtom)
    const [bebidasBox] = useRecoilState(BebidasAtom)
    const [sobremesasBox] = useRecoilState(SobremesasAtom)

    return(
        <div className='cardapioPrincipal'>
            <ModalComponent isOpen={!!item} overlayClassName="modal-overlay" className="modal-content"/>
            <div className='sticky-pos'>
                <Cabecalho/>
            </div>
            <div>
                <Link to="/dashboard" className='voltar-principal'>
                    <button className='btn-voltar'><FontAwesomeIcon icon={faArrowLeft} className='icone-seta'/></button>
                </Link>
            </div>
            <ItensBox id='combos' tipo={comboBox.tipo} list={comboBox.list}/>
            <ItensBox id='bebidas' tipo={bebidasBox.tipo} list={bebidasBox.list}/>
            <ItensBox id='sobremesas' tipo={sobremesasBox.tipo} list={sobremesasBox.list}/>
        </div>
    )
}

function ModalComponent ({isOpen, overlayClassName, className}) {
    const [_, setItem] = useRecoilState(itemSelecionadoAtom);

    const ModalInfo = useRecoilValue(ModalItemSelector);

    function closeModal(){
        setItem(null);
    }


    return (
        <Modal
            isOpen={isOpen}
            overlayClassName={overlayClassName}
            className={className}
        > 
            <header className='modalHeader'>
                <div className='modal-topo'>
                    <button onClick={closeModal} className='btn-voltar'> 
                        <FontAwesomeIcon icon={faArrowLeft} className='icone-seta'/>
                    </button>
                    <h2>{ModalInfo?.nome}</h2>
                </div> 
            </header>
            <main>
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
            </main>
            <footer className='footerModal'>
              <Button texto="Remover" className='modal-rm' />
            </footer>
        </Modal>
    )
}