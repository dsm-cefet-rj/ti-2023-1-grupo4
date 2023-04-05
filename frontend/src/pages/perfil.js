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
                <div className='inputsContainer'>
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
                    <InputField 
                      label={"Número e Complemento"}
                      value={"55, Casa"}
                      type={"text"}
                      editable={edit}
                    />
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
                    <Button texto='Editar perfil' onClick={() => setEdit(!edit)}/>
                  </div>
                : <div id='submit-wrapper'>
                    <Button texto='Cancelar' onClick={() => setEdit(!edit)}/>
                    <Button texto='Salvar' onClick={() => setEdit(!edit)}/>
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

