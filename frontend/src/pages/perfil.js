import React from "react";
import Button from "../components/Botao/button";
import "../styles/perfil.scss";
import Cabecalho from "../components/Cabecalho/cabecalho";
import { useState, useEffect } from "react";

export default function perfil() {
  const [edit, setEdit] = useState(false);

  const [form, setForm] = useState({});

  const [token, setToken] = useState(JSON.parse(sessionStorage.getItem('fastbyte_token')))

  return (
    <div>
      <div className="sticky-pos">
        <Cabecalho />
      </div>
      <div className="perfilPrincipal">
        <div className="perfilContainer">
          <div className="dadosContainer">
            <h1>Dados da Conta</h1>
            <div className="inputsContainer">
              <InputField
                label={"Nome de Usuário"}
                value={token.userName}
                type={"text"}
                editable={edit}
              />
              <InputField
                label={"E-mail"}
                value={token.email}
                type={"email"}
                editable={edit}
              />
              <InputField
                label={"Senha"}
                value={'0'.repeat(6 + Math.round(Math.random() * 4))}
                type={"password"}
                editable={edit}
              />
            </div>
          </div>
          <div className="enderecoContainer">
            <h1>Endereço</h1>
            <div className="inputsContainerTwo">
              <InputField
                label={"CEP"}
                value={token?.endereco?.cep || ''}
                type={"text"}
                editable={edit}
              />
              <InputField
                label={"Rua"}
                value={token?.endereco?.logradouro || ''}
                type={"text"}
                editable={edit}
              />
              <InputField
                label={"Bairro"}
                value={token?.endereco?.bairro || ''}
                type={"text"}
                editable={edit}
              />
              <div className="complementoBox">
                <InputField
                  label={"Número"}
                  value={token?.endereco?.numero || ''}
                  type={"text"}
                  editable={edit}
                />
                <InputField
                  label={"Complemento"}
                  value={token?.endereco?.complemento || ''}
                  type={"text"}
                  editable={edit}
                />
              </div>

              <InputField
                label={"Cidade"}
                value={token?.endereco?.cidade || ''}
                type={"text"}
                editable={edit}
              />
              <InputField
                label={"Estado"}
                value={token?.endereco?.uf || ''}
                type={"text"}
                editable={edit}
              />
            </div>
          </div>
          {!edit ? (
            <div id="submit-wrapper">
              {/* <button className="buttonStyle" onClick={() => setEdit(!edit)}>
                Editar perfil
              </button> */}
            </div>
          ) : (
            <div id="submit-wrapper">
              
              <button className="buttonStyleTwo" onClick={() => setEdit(!edit)}>
                Salvar
              </button>
              <button className="buttonStyleTwo" onClick={() => setEdit(!edit)}>
                Cancelar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InputField({ label, value, onChange, editable, type }) {
  return (
    <div className={"labelContainer"}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        readOnly={!editable}
      />
    </div>
  );
}
