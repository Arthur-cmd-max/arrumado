import { Routes, Route } from "react-router-dom"

import Inicial from "./paginas/Inicial"
import Login from "./paginas/Login"
import Home from "./paginas/Home"
import Informacoes from "./paginas/Informacoes"
import Sobre from "./paginas/Sobre"
import Itens from "./paginas/Itens"
import Bibliografia from "./paginas/Bibliografia"

function Router() {
    return (
        <Routes>
        
        <Route path="/" element={<Inicial />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Informacoes" element={<Informacoes />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Itens" element={<Itens />} />
        <Route path="/Bibliografia" element={<Bibliografia />} />
        
        </Routes>
    )
}

export default Router