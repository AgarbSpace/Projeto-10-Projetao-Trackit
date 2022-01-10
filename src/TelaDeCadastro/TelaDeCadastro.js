import { Link } from "react-router-dom"
import { useState } from "react"
import TelasIniciais from "../Estilo Tela Inicial e Cadastro/style"
import logo from "../../src/logo/logoTrackIt.png"
import axios from "axios"
import ThreeDots from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function TelaDeCadastro(){
    const [formCadastro, setFormCadastro] = useState({
        email:"",
        name: "",
        image: "",
        password:""
    })
    const [statusDaTela, setStatusDaTela] = useState("")

    function enviarCadastro(e){
        e.preventDefault();

        const promessa = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            ...formCadastro
        })
        
        promessa.then(resposta => {alert("Cadastro realizado com sucesso!");
            setStatusDaTela("");
        })
        promessa.catch(erro => {alert("Dados inválidos, tente novamente!");
            setStatusDaTela("");
    })

    }

    function inputControlado(e){
        setFormCadastro({...formCadastro, [e.target.name]: e.target.value})
    }
        
    return(
        <TelasIniciais statusDaTela = {statusDaTela}>
            <img src= {logo} alt="logo"/>
            <form onSubmit={enviarCadastro}>
                <input type= "email" placeholder="email" value = {formCadastro.email} name = "email" onChange = {inputControlado}/>
                <input type= "password" placeholder="senha" value = {formCadastro.password} name = "password" onChange = {inputControlado}/>
                <input type= "text" placeholder="nome" value = {formCadastro.name}  name ="name" onChange = {inputControlado}/>
                <input type= "text" placeholder="foto" value = {formCadastro.image} name = "image" onChange = {inputControlado}/>
                <button type="submit" onClick={() => setStatusDaTela("atualizando")}>{statusDaTela === 'atualizando' ? <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} /> : "Entrar"}</button>
            </form>
            <Link to = "/">Já tem uma conta? Faça login!</Link>
        </TelasIniciais>
    )

}