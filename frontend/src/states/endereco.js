import { atom } from "recoil";

export const EnderecoAtom = atom({
  key: "enderecoAtom",
  default: {
    cep: "",
    logradouro: "",
    bairro: "",
    numero: "",
    complemento: "",
    cidade: "",
    uf: "",
  },
});
