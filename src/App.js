import React from 'react';
import GlobalStyle from './Estilo Global/style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaInicial from './TelaInicial/TelaInicial';
import TelaDeCadastro from './TelaDeCadastro/TelaDeCadastro';
import TelaDeHabitos from './TelaDeHabitos/TelaDeHabitos';
import {useAutenticador} from './provedor/autenticador';

export default function App(){

    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path = "/" element ={<TelaInicial/>} />
                <Route path = "/cadastro" element = {<TelaDeCadastro />}/>
                <Route path = "/habitos" element = {<TelaDeHabitos/>}/>
            </Routes>
        </BrowserRouter>
    )
}


