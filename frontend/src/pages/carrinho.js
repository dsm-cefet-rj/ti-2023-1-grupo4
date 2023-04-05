//import logo from '../../assets/images/logo.png'
import Cabecalho from '../components/Cabecalho/cabecalho';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Button from '../components/Botao/button';


import "../styles/carrinho.scss"; // importando o arquivo de estilos CSS


export default function Carrinho() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Combo 1", price: 19.99 },
    { id: 2, name: "Combo 2", price: 22.99 },
    { id: 3, name: "Coca-cola", price: 4.99 },
    { id: 4, name: "Guarana", price: 2.99 },
    { id: 5, name: "Pudim", price: 11.99 },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentOption, setPaymentOption] = useState("card");

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    setTotalPrice(total);
  };

  const confirmOrder = () => {
    alert("Pedido confirmado!");
  };

  return (
    <div>
        <div className='sticky-pos'>
            <Cabecalho/>
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
                {cartItems.map((item) => (
                    <div className="cart-item" key={item.id}>
                    <p>{item.name}</p>
                    <p>R$ {item.price.toFixed(2)}</p>
                    </div>
                ))}
                </div>
                <div className="cart-footer">
                    <p>Preço total: R$ {totalPrice.toFixed(2)}</p>
                </div>
                
                <div className='payInput'>
                <label for="opcoes-pagamento">Escolha uma opção de pagamento:</label>
                  <select id="opcoes-pagamento" name="opcoes-pagamento">
                    <option  value={null}>Selecione a forma de pagamento</option>
                    <option value="cartao">Cartão</option>
                    <option value="dinheiro">Dinheiro</option>
                    <option value="pix">PIX</option>
                  </select>
                </div>
            <div className='button'>
              <Button className="confirm-button" onClick={confirmOrder} texto='Confirmar'/>
              </div>    
            
            </div>
        </div>
    </div>
        
  );
}


