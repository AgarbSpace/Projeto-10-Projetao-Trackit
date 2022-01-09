import { useNavigate } from "react-router-dom";
import SectionConteudo from "../Estilo Global/SectionConteudo";
import HeaderDasPaginas from "../Header/HeaderDasPaginas";
import Footer from "../TelaDeHabitos/Styleds/Footer";
import ContainerTelaHistorico from "./ContainerTelaHistorico";

export default function TelaHistorico(){
    const navegacao = useNavigate();

    return <SectionConteudo>
        <HeaderDasPaginas />
        <ContainerTelaHistorico>
            <h1>Histórico</h1>
            <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
        </ContainerTelaHistorico>
        <Footer>
            <span onClick={() => navegacao('/habitos')}>Hábitos</span>
            <button onClick={() => navegacao('/hoje')}>Hoje</button>
            <span onClick={() => navegacao('/historico')}>Histórico</span>
        </Footer>
    </SectionConteudo>
}