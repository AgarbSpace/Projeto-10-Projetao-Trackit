import TelasIniciais from "../Estilo Tela Inicial e Cadastro/style"
import logo from "../../src/logo/logoTrackIt.png"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axios from "axios";
import { useAutenticador } from "../provedor/autenticador";


export default function TelaInicial(){
    const [formLogin, setFormLogin] = useState({
        email: "", 
        password: ""
    })
    const navegacao = useNavigate()
    const {setUsuario} = useAutenticador();
    
    function logar(e){
        e.preventDefault()
        
        const promessa = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",{
            ...formLogin
        } )
        
        promessa.then(resposta => {
            setUsuario(resposta.data)
            navegacao('/habitos')
        } )

        promessa.catch(erro => console.log(erro.response))
    }

    function inputControlado(e){
        setFormLogin({...formLogin, [e.target.name]: e.target.value})
    }

    return(
        <TelasIniciais>
            <img src= {logo} alt="logo"/>
            <form onSubmit={logar}>
                <input type= "email" placeholder="email" value = {formLogin.email} name = "email" onChange = {inputControlado}/>
                <input type= "password" placeholder="senha" value = {formLogin.password} name = "password" onChange = {inputControlado}/>
                <button type="submit" >Entrar</button>
            </form>
            <Link to = "/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </TelasIniciais>
    )
}