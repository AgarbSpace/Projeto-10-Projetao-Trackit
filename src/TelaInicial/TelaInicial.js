import TelasIniciais from "../Estilo Tela Inicial e Cadastro/style"
import logo from "../../src/logo/logoTrackIt.png"
import { useState } from "react"

export default function TelaInicial(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return(
        <TelasIniciais>
            <img src= {logo} alt="logo"/>
            <input type= "email" placeholder="email" value = {email} onChange = {e => setEmail(e.target.value)}/>
            <input type= "password" placeholder="senha" value = {senha} onChange = {e => setSenha(e.target.value)}/>
            <button>Entrar</button>
            <a>Não tem uma conta? Cadastre-se!</a>
        </TelasIniciais>
    )
}