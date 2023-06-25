import { atom, selector } from "recoil";

export const itemSelecionadoAtom = atom({
  key: "itemSelecionado",
  default: null,
});

export const CombosAtom = atom({
  key: "cardapioCombo",
  default: {tipo:"Combos", list:[]},
});

export const BebidasAtom = atom({
  key: "cardapioBebidas",
  default: import("../data/bebidas.json"),
});

export const SobremesasAtom = atom({
  key: "cardapioSobremesas",
  default: import("../data/sobremesas.json"),
});

export const ModalItemSelector = selector({
  key:'ModalSelector',
  get: ({get}) => {
    const sel = get(itemSelecionadoAtom);

    if(sel?.tipo === 'combos'){
      return get(CombosAtom).list[sel.index]
    }

    if(sel?.tipo === 'bebidas'){
      return get(BebidasAtom).list[sel.index]
    }

    if(sel?.tipo === 'sobremesas'){
      return get(SobremesasAtom).list[sel.index]
    }

    return false;

  }
})