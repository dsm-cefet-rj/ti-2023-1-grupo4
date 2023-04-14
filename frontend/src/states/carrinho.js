import { atom } from "recoil";
import { getItensCarrinho } from "../services/carrinho";

export const CarrinhoAtom = atom({
  key: "carrinhoAtom",
  default: getItensCarrinho()
});
