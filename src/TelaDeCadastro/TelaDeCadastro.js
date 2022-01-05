import { Link } from "react-router-dom"
import { useState } from "react"
import TelasIniciais from "../Estilo Tela Inicial e Cadastro/style"
import logo from "../../src/logo/logoTrackIt.png"

export default function TelaDeCadastro(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [foto, setFoto] = useState("")

    return(
        <TelasIniciais>
            <img src= {logo} alt="logo"/>
            <input type= "email" placeholder="email" value = {email} onChange = {e => setEmail(e.target.value)}/>
            <input type= "password" placeholder="senha" value = {senha} onChange = {e => setSenha(e.target.value)}/>
            <input type= "text" placeholder="nome" value = {nome} onChange = {e => setNome(e.target.value)}/>
            <input type= "text" placeholder="foto" value = {foto} onChange = {e => setFoto(e.target.value)}/>
            <button>Entrar</button>
            <Link to = "/">Já tem uma conta? Faça login!</Link>
        </TelasIniciais>
    )
}