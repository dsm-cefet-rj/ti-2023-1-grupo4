import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Home from "./pages/home";
import Cardapio from "./pages/cardapio";
import Endereco from "./pages/endereco";
import Perfil from "./pages/perfil";
import Carrinho from "./pages/carrinho";
import StatusPedido from "./pages/statuspedido";
import Dashboard from "./pages/dashboard"

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/endereco" element={<Endereco />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/statuspedido" element={<StatusPedido />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}
