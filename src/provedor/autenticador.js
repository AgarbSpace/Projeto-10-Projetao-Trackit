import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export const AutenticadorContext = React.createContext({})

export const ProvedorAutenticacao = (props) => {
    
    const usuarioGuardado = localStorage.getItem("usuarioGuardado")
    const [usuario, setUsuario] = useState(JSON.parse(usuarioGuardado));

    
    return (
        <AutenticadorContext.Provider value = {{usuario, setUsuario}}>
            {props.children}
        </AutenticadorContext.Provider>
    )
}

export const useAutenticador = () => React.useContext(AutenticadorContext);