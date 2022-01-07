import Container from "./Styleds/ContainerStyle"
import AdicionarHabitos from "./Styleds/AdicionarHabitosStyle"
import Header from '../Header/HeaderDasPaginas';
import Section from "./Styleds/Section";
import Footer from "./Styleds/Footer";
import ContainerAdicionarHabito from "./Styleds/ContainerAdicionarHabito"
import Input from "./Styleds/Input";
import MiniBotoes from "./Styleds/MiniBotoes";
import ContainerBotoes from "./Styleds/ContainerBotoes";
import BotaoCancelar from "./Styleds/BotaoCancelar";
import BotaoSalvar from "./Styleds/BotaoSalvar";
import ContainerMiniBotoes from "./Styleds/ContainerMiniBotoes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import selecionado from "./Styleds/selecionado.css"
import axios from "axios";
import { useAutenticador } from "../provedor/autenticador";

export default function TelaDeHabitos(){
    const [adiciona, setAdiciona] = useState(false);
    const navegacao = useNavigate()

    return(
        <>
            <Header/>
            <Section>
                <Container>
                    <AdicionarHabitos>
                        <span>Meus Hábitos</span>
                        <button onClick = {() => setAdiciona(true)}>+</button>
                    </AdicionarHabitos>
                    <AdicionarHabito setAdiciona = {setAdiciona} adiciona = {adiciona}/>
                    <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
                </Container>
                <Footer>
                    <span onClick={() => navegacao('/habitos')}>Hábitos</span>
                    <button onClick={() => navegacao('/hoje')}>Hoje</button>
                    <span onClick={() => navegacao('/historico')}>Histórico</span>
                </Footer>
            </Section>
        </>
    )
}

function AdicionarHabito({setAdiciona, adiciona}){
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const [diasSelecionados, setDiasSelecionados] = useState([])
    const [habito, setHabito] = useState("")
    const {usuario} = useAutenticador()
    let i = 0;
    console.log(habito);
    
    function pegarDiaSelecionado(e){

        if(diasSelecionados.includes(parseInt(e.accessKey))){

            diasSelecionados.splice(diasSelecionados.indexOf(parseInt(e.accessKey)), 1);
            setDiasSelecionados([...diasSelecionados])
            return;
        }

        setDiasSelecionados([...diasSelecionados, parseInt(e.accessKey)])
    }

    function inputControlado(e){
        setHabito(e.target.value)
    }

    function enviarHabito(){
        const dias = diasSelecionados.map(dias => dias+1)  

        const promessa = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", 
        {
            name: habito,
            days: dias.sort((a,b) => a-b)
        }, 
        {headers: {
                Authorization: `Bearer ${usuario.token}`
            }
        })

        promessa.then(resposta => {console.log(resposta)
            setHabito("")
            setDiasSelecionados([])
        });
        promessa.catch(erro => console.log(erro.response));
    }

    return(
        <ContainerAdicionarHabito adiciona = {adiciona}>
            <Input type = "text" name = "name"  placeholder="nome do hábito" value = {habito} onChange={inputControlado}/>
            <ContainerMiniBotoes>
                {dias.map((dia, id) => <MiniBotoes key = {i++} accessKey = {id} className={`${diasSelecionados.includes(id) && "selecionado"}`} onClick={(e) => pegarDiaSelecionado(e.target)} >{dia}</MiniBotoes>)}
            </ContainerMiniBotoes>
            <ContainerBotoes>
                <BotaoCancelar onClick={() => setAdiciona(false)}>Cancelar</BotaoCancelar>
                <BotaoSalvar onClick={() => enviarHabito()}>Salvar</BotaoSalvar>
            </ContainerBotoes>
        </ContainerAdicionarHabito>
    )
}

function ListarHabitos(){

    
}