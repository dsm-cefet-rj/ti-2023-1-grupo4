import "../styles/endereco.scss";
import logo from "../assets/images/logo.png";
import Button from "../components/Botao/button";
import { Link } from "react-router-dom";
import { EnderecoAtom } from "../states/endereco";
import { useRecoilState } from "recoil";
import { Formik, Field, Form } from "formik";
import { CadastroAtom } from "../states/cadastro";
import { useEffect } from "react";
import { inicializaCarrinho } from "../services/carrinho";
import { BufferComponent } from "../components/Auth";
import { FinishRegisterFn } from "../services/backend";
import api from "../services/api";

export default function Endereco() {
  const [enderecoForm, setEnderecoForm] = useRecoilState(EnderecoAtom);
  const [cadastroForm, setCadastroForm] = useRecoilState(CadastroAtom);

  useEffect(() => {
    setCadastroForm(JSON.parse(sessionStorage.getItem("cadastroBuffer")));
  }, []);

  function setEnderecoField(campo, value) {
    let tempForm = { ...enderecoForm };
    tempForm[campo] = value;
    setEnderecoForm(tempForm);
  }

  async function onSubmitEndereco() {

    let initialValue = true;
    initialValue = !Object.values(enderecoForm).reduce(
        (accumulator, currentValue) => !!accumulator && !!currentValue,
        initialValue
      )
    if (initialValue) {
      alert("Campo obrigatório não preenchido!");
      return;
    }

    const {
      email,
      password,
      userName
    } = cadastroForm;
    console.log(cadastroForm);
    try{
      const {data} = await api.post("/users", {
        email,
        password,
        username:userName,
        cep:enderecoForm.cep,
        rua:enderecoForm.logradouro,
        bairro:enderecoForm.bairro,
        numero:enderecoForm.numero,
        complemento:enderecoForm.complemento,
        cidade:enderecoForm.cidade,
        estado:enderecoForm.uf
      });
  
      sessionStorage.removeItem("cadastroBuffer");
      window.location.href = "/login";
    }catch(e){
      alert(e.message);
    }
    
  }

  function onBlurCep(ev) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())

      .then((data) => {
        let tempForm = { ...enderecoForm };

        tempForm["bairro"] = data.bairro;
        tempForm["logradouro"] = data.logradouro;
        tempForm["cidade"] = data.localidade;
        tempForm["uf"] = data.uf;

        setEnderecoForm(tempForm);
      });
  }

  return (
    <div className="enderecoFundo">]
      <BufferComponent redirect={'/cadastro'}/>
      <div className="enderecoPrincipal">
        <div className="enderecoTitulo">
          <h1>FastByte</h1>
          <img src={logo} alt="logo" />
        </div>
        <div className="enderecoBox">
          <Formik initialValues={enderecoForm} onSubmit={onSubmitEndereco}>
            <Form className="enderecoFormulario">
              <div className="enderecoInputs">
                <label>CEP</label>
                <Field
                  name="cep"
                  type="text"
                  onBlur={(ev) => onBlurCep(ev)}
                  placeholder="Digite seu CEP"
                  value={enderecoForm.cep}
                  onChange={(e) => setEnderecoField("cep", e.target.value)}
                />
              </div>
              <div className="enderecoInputs">
                <label>Rua</label>
                <Field
                  name="rua"
                  type="text"
                  placeholder="Digite sua rua"
                  value={enderecoForm.logradouro}
                  onChange={(e) =>
                    setEnderecoField("logradouro", e.target.value)
                  }
                />
              </div>
              <div className="enderecoInputs">
                <label>Bairro</label>
                <Field
                  name="bairro"
                  type="text"
                  placeholder="Digite seu bairro"
                  value={enderecoForm.bairro}
                  onChange={(e) => setEnderecoField("bairro", e.target.value)}
                />
              </div>
              <div className="complementoContainer">
                <div className="complementoInputs">
                  <label>Número</label>
                  <Field
                    name="numero"
                    type="text"
                    placeholder="Digite o numero"
                    value={enderecoForm.numero}
                    onChange={(e) => setEnderecoField("numero", e.target.value)}
                  />
                </div>
                <div className="complementoInputs">
                  <label>Complemeto</label>
                  <Field
                    name="complemento"
                    type="text"
                    placeholder="Digite o complemento"
                    value={enderecoForm.complemento}
                    onChange={(e) =>
                      setEnderecoField("complemento", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="enderecoInputs">
                <label>Cidade</label>
                <Field
                  name="cidade"
                  type="text"
                  placeholder="Digite sua cidade"
                  value={enderecoForm.cidade}
                  onChange={(e) => setEnderecoField("cidade", e.target.value)}
                />
              </div>
              <div className="enderecoInputs">
                <label>Estado</label>
                <Field
                  component="select"
                  name="uf"
                  placeholder="Digite sua cidade"
                  value={enderecoForm.uf}
                  onChange={(e) => setEnderecoField("uf", e.target.value)}
                >
                  <option className="enderecoOption" value={null}>
                    Selecione o estado
                  </option>
                  <option className="enderecoOption" value={"RJ"}>
                    Rio de janeiro
                  </option>
                </Field>
              </div>
              <Button type="submit" texto="Confirmar" />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
