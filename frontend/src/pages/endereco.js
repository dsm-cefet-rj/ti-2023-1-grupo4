import '../styles/endereco.scss';
import logo from '../assets/images/logo.png';
import Button from '../components/Botao/button';
import { Link } from 'react-router-dom';


import { Formik, Field, Form } from 'formik';

export default function Endereco(){

    function onSubmit(values, actions){
        console.log('SUBMIT', values)
    }

    function onBlurCep(ev, setFieldValue){
        const { value } = ev.target; 

        const cep = value?.replace(/[^0-9]/g, '')

        if(cep?.length !== 8){
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                setFieldValue('bairro', data.bairro);
                setFieldValue('rua', data.logradouro)
                setFieldValue('cidade', data.localidade);
                setFieldValue('uf', data.uf);
            })
    }


    return(
        <div className="enderecoFundo">
            <div className='enderecoPrincipal'>
                <div className="enderecoTitulo">
                    <h1>FastByte</h1>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='enderecoBox'>
                    <Formik
                        onSubmit={onSubmit}
                        initialValues={{
                            name: '',
                            email: '',
                        }}
                        render={({ setFieldValue }) => (
                            <Form className='enderecoFormulario'>
                                <div className='enderecoInputs'>
                                    <label>CEP</label>
                                    <Field name='cep' type="text" onBlur={(ev) => onBlurCep(ev, setFieldValue)} placeholder="Digite seu CEP"/>
                                </div>
                                <div className='enderecoInputs'>
                                    <label>Rua</label>
                                    <Field name='rua' type="text" placeholder="Digite sua rua"/>
                                </div>
                                <div className='enderecoInputs'>
                                    <label>Bairro</label>
                                    <Field name='bairro' type="text" placeholder="Digite seu bairro"/>
                                </div>
                                <div className='enderecoInputs'>
                                    <label>Número e complemeto</label>
                                    <Field name='numero' type="text" placeholder="Digite o numero e o complemento"/>
                                </div>
                                <div className='enderecoInputs'>
                                    <label>Cidade</label>
                                    <Field name='cidade' type="text" placeholder="Digite sua cidade"/>
                                </div>
                                <div className='enderecoInputs'>
                                    <label>Estado</label>
                                    <Field component='select' name='uf'  placeholder="Digite sua cidade">
                                        <option className='enderecoOption' value={null}>Selecione o estado</option>
                                        <option className='enderecoOption' value={"RJ"}>Rio de janeiro</option>
                                    </Field>
                                </div>
                                <Link to='/cardapio'>
                                    <Button type="submit" texto='Confirmar'/>
                                </Link>
                            </Form>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}