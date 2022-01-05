import TelasIniciais from "../Estilo Tela Inicial e Cadastro/style"
import logo from "../../src/logo/logoTrackIt.png"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
//import axios from "axios"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export default function TelaInicial(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navegacao = useNavigate()

    function logar(){
        //const promessa = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", 
        //{
          //  email: email,
          //  password: senha
       // })

       // promessa.then(resposta => {
            navegacao('/habitos')
        //} )

        //promessa.then(erro => console.log(erro.response))
    }

    return(
        <TelasIniciais>
            <img src= {logo} alt="logo"/>
            <input type= "email" placeholder="email" value = {email} onChange = {e => setEmail(e.target.value)}/>
            <input type= "password" placeholder="senha" value = {senha} onChange = {e => setSenha(e.target.value)}/>
            <button onClick = {logar}>Entrar</button>
            <Link to = "/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </TelasIniciais>
    )
}