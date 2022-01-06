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
    let i = 0;
        return(
            <ContainerAdicionarHabito adiciona = {adiciona}>
                <Input type = "text" placeholder="nome do hábito" />
                <ContainerMiniBotoes>
                    {dias.map(dia => <MiniBotoes key = {i++}>{dia}</MiniBotoes>)}
                </ContainerMiniBotoes>
                <ContainerBotoes>
                    <BotaoCancelar onClick={() => setAdiciona(false)}>Cancelar</BotaoCancelar>
                    <BotaoSalvar>Salvar</BotaoSalvar>
                </ContainerBotoes>
            </ContainerAdicionarHabito>
        )
}