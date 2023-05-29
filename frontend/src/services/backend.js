import api from './api';
import {inicializaCarrinho} from './carrinho'

export function StartUsersFn(){
  let users = localStorage.getItem("fast_byte_usuarios");
  if (!users) {
    localStorage.setItem("fast_byte_usuarios", JSON.stringify({usuarios:[
      {
        email: 'admin@fastbyte.com',
        password: 'admin',
        userName: 'Admin',
        tipo: "admin"
      }
    ]}));
    return;
  }
  let admUser = JSON.parse(users)['usuarios'].find(v => {
    return v['email'] === 'admin@fastbyte.com';
  });

  if (!admUser) {
    localStorage.setItem("fast_byte_usuarios", JSON.stringify({usuarios:[
      {
        email: 'admin@fastbyte.com',
        password: 'admin',
        userName: 'Admin',
        tipo: "admin"
      }
    ]}));
    return;
  }

}

export async function LoginFn({email, password}){

  const userData = await api.post('/signIn', {email, password})

  let users = localStorage.getItem("fast_byte_usuarios");
  if (!!users) {
    users = JSON.parse(users);
  } else {
    return {status:false,message:"Email ou senha incorretos."};
  }

  let hasUser = users["usuarios"].find((v) => {
    return v.email === email && v.password === password;
  });

  if (!!hasUser) {
    sessionStorage.setItem(
      "fast_byte_token",
      JSON.stringify({
        email: hasUser.email,
        tipo: hasUser.tipo,
        userName: hasUser.userName,
        endereco:hasUser.endereco || null
      })
    );
    
    return {status:true, token:JSON.stringify({
      email: hasUser.email,
      tipo: hasUser.tipo,
      userName: hasUser.userName,
      endereco:hasUser.endereco || null
     })};
  } else {
    return {status:false,message:"Email ou senha incorretos."};
  }

}

export function StartRegisterFn({email, password, userName, confirmPassword}){
  if (
    !email ||
    !password ||
    !userName ||
    !confirmPassword
  ) {
    return {status:false, message:"Por favor, preencha os campos obrigatórios"};
  } else {
    if (password !== confirmPassword) {
      return {status:false, message:"As senhas não conferem!"};
    }
    let users = localStorage.getItem("fast_byte_usuarios");
    if (!!users) {
      let emailInUse = JSON.parse(users)['usuarios'].find(v => {
        return v['email'] === email;
      });

      if(!!emailInUse){
        return {status:false, message: 'Email já cadastrado!'}
      }
    }

    return {status:true};
  }
}

export function FinishRegisterFn({email, password, userName, enderecoForm}){
  let users = localStorage.getItem("fast_byte_usuarios");
  if (!!users) {
    users = JSON.parse(users);
    users["usuarios"].push({
      email: email,
      password: password,
      userName: userName,
      tipo: "usuario",
      endereco: enderecoForm,
    });

    localStorage.setItem(
      "fast_byte_usuarios",
      JSON.stringify(users)
    );

    sessionStorage.setItem(
      "fast_byte_token",
      JSON.stringify({
        email: email,
        userName: userName,
        tipo: "usuario",
        endereco:enderecoForm
      })
    );
    inicializaCarrinho();
  } else {
    localStorage.setItem(
      "fast_byte_usuarios",
      JSON.stringify({
        usuarios: [
          {
            email: email,
            password: password,
            userName: userName,
            tipo: "usuario",
            endereco: enderecoForm,
          },
        ],
      })
    );
    inicializaCarrinho();


    sessionStorage.setItem(
      "fast_byte_token",
      JSON.stringify({
        email: cadastroForm.email,
        userName: cadastroForm.userName,
        tipo: "usuario",
        endereco:enderecoForm
      })
    );
  }
}

export function GetPedidos(user){
  let pedidos = localStorage.getItem('fastbyte-pedidos');
  if(!pedidos){
    return [];
  }
  
  pedidos = JSON.parse(pedidos)['pedidos'];

  if(!!user){
    return pedidos.filter(v => {
      v.email === user;
    })
  }else{
    return pedidos
  }
}

export function addPedido({carrinho, payment, endereco, email}){
  let pedidos = localStorage.getItem('fastbyte-pedidos');
  if(!pedidos){
    localStorage.setItem('fastbyte-pedidos', JSON.stringify({pedidos:[{carrinho, payment, status:0, endereco, email}]}))
    return {status:true};
  }
  
  pedidos = JSON.parse(pedidos)['pedidos'];
  pedidos.push({carrinho, payment, status:0, endereco, email});

  localStorage.setItem('fastbyte-pedidos', JSON.stringify({pedidos}))
}