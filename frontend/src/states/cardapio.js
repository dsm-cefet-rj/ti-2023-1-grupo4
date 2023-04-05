import { atom } from 'recoil'

export const CombosAtom = atom({
    key: 'cardapioCombo',
    default: import('../data/combos.json')
})

export const BebidasAtom = atom({
    key: 'cardapioBebidas',
    default: import('../data/bebidas.json')
})

export const SobremesasAtom = atom({
    key: 'cardapioSobremesas',
    default: import('../data/sobremesas.json')
})