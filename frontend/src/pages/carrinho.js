//import logo from '../../assets/images/logo.png'
import Cabecalho from "../components/Cabecalho/cabecalho";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Button from "../components/Botao/button";
import { useRecoilState } from "recoil";
import "../styles/carrinho.scss"; // importando o arquivo de estilos CSS
import { CarrinhoAtom } from "../states/carrinho";
import { setItensCarrinho } from "../services/carrinho";


export default function Carrinho() {
  
  const [carrinho, setCarrinha] = useRecoilState(CarrinhoAtom)


  
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentOption, setPaymentOption] = useState("card");

  const clearCart = () => {
    setCarrinha([]);
    setTotalPrice(0);
  };

  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  useEffect(() => {
    setItensCarrinho(carrinho)
    calculateTotalPrice();
  }, [carrinho]);

  const calculateTotalPrice = () => {
    let total = 0;
    carrinho.forEach((item) => {
      total += parseFloat(item.preco.replace(/[^0-9,]/g,"").replace(",","."));
    });
    setTotalPrice(total);
  };

  const confirmOrder = () => {
    alert("Pedido confirmado!");
  };

  return (
    <div>
      <div className="sticky-pos">
        <Cabecalho />
      </div>
      <div className="container">
        <div className="cart-container">
          <div className="cart-header">
            <h2>Meu carrinho:</h2>
            <button className="clear-button" onClick={clearCart}>
              Esvaziar carrinho
            </button>
          </div>
          <div className="cart-items">
            {carrinho.map((item) => (
              <div className="cart-item">
                <p>{item.nome}</p>
                <p>{item.preco}</p>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <p>Preço total: R$ {totalPrice.toFixed(2)}</p>
          </div>

          <div className="payInput">
            <label for="opcoes-pagamento">
              Escolha uma opção de pagamento:
            </label>
            <select id="opcoes-pagamento" name="opcoes-pagamento">
              <option value={null}>Selecione a forma de pagamento</option>
              <option value="cartao">Cartão</option>
              <option value="dinheiro">Dinheiro</option>
              <option value="pix">PIX</option>
            </select>
          </div>
          <div className="button">
            <Button
              className="confirm-button"
              onClick={confirmOrder}
              texto="Confirmar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
