import React from 'react';
import GlobalStyle from './Estilo Global/style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaInicial from './TelaInicial/TelaInicial';
import TelaDeCadastro from './TelaDeCadastro/TelaDeCadastro';
import TelaDeHabitos from './TelaDeHabitos/TelaDeHabitos';
import TelaHoje from './TelaHoje/TelaHoje';
import TelaHistorico from './TelaHistorico/TelaHistorico';

export default function App(){

    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path = "/" element ={<TelaInicial/>} />
                <Route path = "/cadastro" element = {<TelaDeCadastro />}/>
                <Route path = "/habitos" element = {<TelaDeHabitos />}/>
                <Route path = "/hoje" element = {<TelaHoje/>}/>
                <Route path = "/historico" element = {<TelaHistorico/>}/>
            </Routes>
        </BrowserRouter>
    )
}


