export function inicilizaCarrinho(){
  sessionStorage.setItem("fastByteCarrinho", JSON.stringify({itens: []}));
}

export function setItensCarrinho(itens){
  let carrinho = JSON.parse(sessionStorage.getItem("fastByteCarrinho"));
  carrinho.itens = itens;
  sessionStorage.setItem("fastByteCarrinho", JSON.stringify(carrinho));
}

export function getItensCarrinho(){
  let carrinho = JSON.parse(sessionStorage.getItem("fastByteCarrinho"));
  if (carrinho && carrinho.itens) {
    return carrinho.itens;
  }
}