import { useEffect } from "react";

export default function AuthComponent ({redirect}) {

  useEffect(() => {
    const isAuth = !!sessionStorage.getItem('fastbyte_token') || null
    if(!isAuth){
      window.location.href = redirect;
    }
  }, []);

  return;
}

export function BufferComponent ({redirect}) {

  useEffect(() => {
    const isAuth = !!sessionStorage.getItem('cadastroBuffer') || null
    if(!isAuth){
      window.location.href = redirect;
    }
  }, []);

  return;
}