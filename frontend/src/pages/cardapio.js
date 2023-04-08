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