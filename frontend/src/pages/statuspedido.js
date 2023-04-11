import "../styles/statuspedido.scss";
import Cabecalho from "../components/Cabecalho/cabecalho";
import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import Button from "../components/Botao/button";
import { Link } from "react-router-dom";

export default function StatusPedido() {
  const [orderStatus, setOrderStatus] = useState("Pedido Criado");
  const [showConfirmationButton, setShowConfirmationButton] = useState(false);
  const [color, setColor] = useState("black");

  useEffect(() => {
    // simula a atualização do status do pedido
    const interval = setInterval(() => {
      if (orderStatus === "Pedido Criado") {
        setOrderStatus("Seu Pedido está sendo preparado");
      } else if (orderStatus === "Seu Pedido está sendo preparado") {
        setOrderStatus("Pedido saiu para a entrega");
        setShowConfirmationButton(true);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [orderStatus]);

  const handleConfirmation = () => {
    setOrderStatus("Pedido Entregue!");
    setShowConfirmationButton(false);
    setColor("red");
  };

  return (
    <div>
      <div className="sticky-pos">
        <Cabecalho />
      </div>
      <div className="order-status">
        <h2>Status do Pedido</h2>
        <p className={`text ${color === "red" ? "red" : "black"}`}>
          {orderStatus}
        </p>
        {showConfirmationButton && (
          <Button
            onClick={handleConfirmation}
            texto="Confirmar Entrega"
          ></Button>
        )}
      </div>
    </div>
  );
}
