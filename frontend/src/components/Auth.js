import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export default function AuthComponent ({redirect}) {

  useEffect(() => {
    const isAuth = !!sessionStorage.getItem('fast_byte_token') || null
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