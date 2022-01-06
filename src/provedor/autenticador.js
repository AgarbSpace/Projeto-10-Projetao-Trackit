import React from "react";
import { useState } from "react/cjs/react.development";

export const AutenticadorContext = React.createContext({})

export const ProvedorAutenticacao = (props) => {
    const [usuario, setUsuario] = useState({})

    
    return (
        <AutenticadorContext.Provider value = {{usuario, setUsuario}}>
            {props.children}
        </AutenticadorContext.Provider>
    )
}

export const useAutenticador = () => React.useContext(AutenticadorContext);