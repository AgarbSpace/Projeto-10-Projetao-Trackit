import React from 'react';
import GlobalStyle from './Estilo Global/style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaInicial from './TelaInicial/TelaInicial';

export default function App(){
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path = "/" element ={<TelaInicial />}/>
            </Routes>
        </BrowserRouter>
    )
}


