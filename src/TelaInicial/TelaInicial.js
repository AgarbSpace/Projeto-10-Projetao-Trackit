import TelasIniciais from "../Estilo Tela Inicial e Cadastro/style"
import logo from "../../src/logo/logoTrackIt.png"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ThreeDots from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axios from "axios";
import { useAutenticador } from "../provedor/autenticador";


export default function TelaInicial(){
    const [formLogin, setFormLogin] = useState({
        email: "", 
        password: ""
    })
    const [statusDaTela, setStatusDaTela] = useState("")
    const navegacao = useNavigate()
    const {usuario, setUsuario} = useAutenticador();
    
    function logar(e){
        e.preventDefault()
        
        const promessa = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",{
            ...formLogin
        } )
        
        promessa.then(resposta => {
            setUsuario(resposta.data)
            navegacao('/habitos')
        } )

        promessa.catch(erro => {alert("Usuário e/ou senha inválidos!")
            setFormLogin({
                email: "", 
                password: ""
            })
            setStatusDaTela("")
        })
    }

    function inputControlado(e){
        setFormLogin({...formLogin, [e.target.name]: e.target.value})
    }




    return(
        <TelasIniciais statusDaTela = {statusDaTela}>
            <img src= {logo} alt="logo"/>
            <form onSubmit={logar}>
                <input type= "email" placeholder="email" value = {formLogin.email} name = "email" onChange = {inputControlado}/>
                <input type= "password" placeholder="senha" value = {formLogin.password} name = "password" onChange = {inputControlado}/>
                <button type="submit" onClick={() => setStatusDaTela("atualizando")}>{statusDaTela === 'atualizando' ? <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} /> : "Entrar"}</button>
            </form>
            <Link to = "/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </TelasIniciais>
    )
}