import { atom } from 'recoil'

export const CadastroAtom = atom({
    key: 'cadastroAtom',
    default: 
    {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
})