import api from './api';

export async function LoginFn({email, password}){
  try{
    const userData = await api.post('/signIn', {email, password});
    return userData;
  }catch(e){
    return e.response.data;
  }
}

export function addPedido({carrinho, payment, endereco, email}){
  
}