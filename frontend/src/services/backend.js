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

export function LoginFn({email, password}){
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
    inicilizaCarrinho();
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
    inicilizaCarrinho();


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