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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import selecionado from "./Styleds/selecionado.css"
import axios from "axios";
import { useAutenticador } from "../provedor/autenticador";
import Span from "./Styleds/Span";
import TituloDoHabito from "./Styleds/TituloDoHabito";
import SectionConteudo from "../Estilo Global/SectionConteudo";

export default function TelaDeHabitos(){
    const [adiciona, setAdiciona] = useState(false);
    const [temHabito, setTemHabito] = useState(false)
    const navegacao = useNavigate()

    return(
        <SectionConteudo>
            <Header/>
            <Section>
                <Container temHabito = {temHabito}>
                    <AdicionarHabitos>
                        <span>Meus Hábitos</span>
                        <button onClick = {() => setAdiciona(true)}>+</button>
                    </AdicionarHabitos>
                    <AdicionarHabito setAdiciona = {setAdiciona} adiciona = {adiciona}/>
                    <ListarHabitos setTemHabito = {setTemHabito} />
                    <Span temHabito = {temHabito}>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Span>
                </Container>
                <Footer>
                    <span onClick={() => navegacao('/habitos')}>Hábitos</span>
                    <button onClick={() => navegacao('/hoje')}>Hoje</button>
                    <span onClick={() => navegacao('/historico')}>Histórico</span>
                </Footer>
            </Section>
        </SectionConteudo>
    )
}

function AdicionarHabito({setAdiciona, adiciona}){
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const [diasSelecionados, setDiasSelecionados] = useState([])
    const [habito, setHabito] = useState("")
    const {usuario} = useAutenticador()
    console.log(diasSelecionados)
    let i = 0;
    
    
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
        const dias = diasSelecionados.map(dias => dias)  

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
            setHabito("");
            setDiasSelecionados([]);
        });
        promessa.catch(erro => console.log(erro.response));
    }

    function cancelar(){
        setAdiciona(false) 
        setDiasSelecionados([])
    }

    return(
        <ContainerAdicionarHabito adiciona = {adiciona}>
            <Input type = "text" name = "name"  placeholder="nome do hábito" value = {habito} onChange={inputControlado}/>
            <ContainerMiniBotoes>
                {dias.map((dia, id) => <MiniBotoes key = {i++} accessKey = {id} className={`${diasSelecionados.includes(id) && "selecionado"}`} onClick={(e) => pegarDiaSelecionado(e.target)} >{dia}</MiniBotoes>)}
            </ContainerMiniBotoes>
            <ContainerBotoes>
                <BotaoCancelar onClick={cancelar}>Cancelar</BotaoCancelar>
                <BotaoSalvar onClick={() => enviarHabito()}>Salvar</BotaoSalvar>
            </ContainerBotoes>
        </ContainerAdicionarHabito>
    )
}

function ListarHabitos({setTemHabito}){

    const [listaDeHabitos, setListaDeHabitos] = useState([])
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const {usuario} = useAutenticador()

    useEffect(() => {
        const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        {
            headers: {
                Authorization: `Bearer ${usuario.token}`
            }
        })
        promessa.then(resposta => {
            setListaDeHabitos([...resposta.data])
            setTemHabito(true);
        }
        )
        promessa.catch(erro => console.log(erro.response))

    },[])


    if(listaDeHabitos.length === 0){
        return <></>
    }

    function excluirHabito(e){

        const promessa = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${e.id}`, 
        {
            headers: {
                Authorization: `Bearer ${usuario.token}`
            }
        }
        )

        promessa.then(resposta => console.log(resposta))
        promessa.catch(erro => erro.response)
    }

    
    return(
        <>
            {listaDeHabitos.map((habito, index) => <>
                <TituloDoHabito>
                    <span>{habito.name}</span>
                    <ion-icon name="trash-outline" onClick = {() => excluirHabito(habito)}></ion-icon>
                </TituloDoHabito>
                <ContainerMiniBotoes>
                {dias.map((dia, id) => <MiniBotoes accessKey = {id} className={`${listaDeHabitos[index].days.includes(id) && "selecionado"}`} onClick={(e) => console.log(e.target)} >{dia}</MiniBotoes>)}
                </ContainerMiniBotoes>
            </>)}
        </>
    )
}
            