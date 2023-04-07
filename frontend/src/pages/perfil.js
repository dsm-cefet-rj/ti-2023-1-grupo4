import React from 'react'
import Button from '../components/Botao/button'
import '../styles/perfil.scss'
import Cabecalho from '../components/Cabecalho/cabecalho'
import { useState } from "react";

export default function perfil() {

  const [edit, setEdit] = useState(false);

  const [form, setForm] = useState({

  })

  return (
    <div>
      <div className='sticky-pos'>
        <Cabecalho/>
      </div>
        <div className='perfilPrincipal'>
            <div className='perfilContainer'>
              <div className='dadosContainer'>
                <h1>Dados da Conta</h1>
                <div className='inputsContainer'>
                  <InputField 
                      label={"Nome de Usuário"}
                      value={"Marcelo Nóbreghas"}
                      type={"text"}
                      editable={edit}
                    />
                  <InputField 
                      label={"E-mail"}
                      value={"marcelo.nóbreghas@gmail.com"}
                      type={"email"}
                      editable={edit}
                    />
                  <InputField 
                      label={"Senha"}
                      value={"Texto não editável"}
                      type={"password"}
                      editable={edit}
                    />
                </div>
              </div>
              <div className='enderecoContainer'>
                <h1>Endereço</h1> 
                <div className='inputsContainerTwo'>
                    <InputField 
                      label={"CEP"}
                      value={"26410-280"}
                      type={"text"}
                      editable={edit}
                    />
                    <InputField 
                      label={"Rua"}
                      value={"Rua Florença"}
                      type={"text"}
                      editable={edit}
                    />
                    <InputField 
                      label={"Bairro"}
                      value={"Cidade Jardim Marajoara"}
                      type={"text"}
                      editable={edit}
                    />
                    <div className='complementoBox'>
                      <InputField 
                      label={"Número"}
                      value={"55"}
                      type={"text"}
                      editable={edit}
                      />
                      <InputField 
                        label={"Complemento"}
                        value={"Casa"}
                        type={"text"}
                        editable={edit}
                      />
                    </div>
                    
                    <InputField 
                      label={"Cidade"}
                      value={"Japeri"}
                      type={"text"}
                      editable={edit}
                    />
                    <InputField 
                      label={"Estado"}
                      value={"RJ"}
                      type={"text"}
                      editable={edit}
                    />
                </div>
              </div>
              {
                !edit
                ? <div id='submit-wrapper'>
                    <button className='buttonStyle' onClick={() => setEdit(!edit)}>Editar perfil</button>
                  </div>
                : <div id='submit-wrapper'>
                    <button className='buttonStyleTwo' onClick={() => setEdit(!edit)}>Cancelar</button>
                    <button className='buttonStyleTwo' onClick={() => setEdit(!edit)}>Salvar</button>
                  </div>
              }
                
            </div>
        </div>
    </div>
  ) 
}

function InputField ({label, value, onChange, editable, type}) {
  return (
    <div className={'labelContainer'}>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} readOnly={!editable} />
    </div>
  )
}

