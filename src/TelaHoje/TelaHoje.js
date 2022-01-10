import axios from 'axios';
import dayjs from 'dayjs'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import HeaderDasPaginas from '../Header/HeaderDasPaginas';
import { useAutenticador } from '../provedor/autenticador';
import Footer from '../TelaDeHabitos/Styleds/Footer';
import ContainerTelaHoje from './Styleds/ContainerTelaHoje';
import TituloDoHabitoHoje from './Styleds/TituloDoHabitoHoje';
import habitoConcluido from './Styleds/habitoConcluido.css'
import Detalhes from './Styleds/Detalhes';
import DestaqueVerde from './Styleds/DestaqueVerde';
import Titulo from './Styleds/Titulo';
import ContainerTituloBotao from './Styleds/ContainerTituloBotao';
import SectionConteudo from '../Estilo Global/SectionConteudo';

export default function TelaHoje(){
    const [diaDaSemana, setDiaDaSemana] = useState("")
    const [habitosDehoje, setHabitosDeHoje] = useState(null)
    const [habitosConcluidos, setHabitosConcluidos] = useState([])
    const {usuario} = useAutenticador();
    const navegacao = useNavigate();
    
    useEffect(() => {

        const indexDia = dayjs().get('day')
    
        switch (indexDia) {
            case 0: setDiaDaSemana("Domingo");
                break;
            
            case 1: setDiaDaSemana("Segunda");
                break;
    
            case 2: setDiaDaSemana("Terça");
                break;
    
            case 3: setDiaDaSemana("Quarta");
                break;
    
            case 4: setDiaDaSemana("Quinta");
                break;
    
            case 5: setDiaDaSemana("Sexta");
                break;
    
            case 6: setDiaDaSemana("Sábado");
    
        }

    }, [])

    useEffect(() => {
        const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", 
        {
            headers: {
                Authorization: `Bearer ${usuario.token}`
            }
        })

        promessa.then(resposta => setHabitosDeHoje([...resposta.data]));
        promessa.catch(erro => console.log(erro.response));
    }, [])

    function marcarHabitoFeito(e, habito){

        if(habito.done === true){

            const promessa = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/uncheck`, {id:habito.id}, 
            {
                headers: {
                    Authorization: `Bearer ${usuario.token}`
                }
            })
            promessa.then((resposta) => {console.log(resposta)
                habitosConcluidos.splice(habitosConcluidos.indexOf(parseInt(e.accessKey)), 1);
                setHabitosConcluidos([...habitosConcluidos])
                window.location.reload(true)
            })
            promessa.catch((erro) => console.log(erro.response))


            return;
        }


        const promessa = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/check`,{id:habito.id} ,
        {
            headers: {
                Authorization: `Bearer ${usuario.token}`
            }
        })

        promessa.then((resposta) => {
            console.log(resposta);
            setHabitosConcluidos([...habitosConcluidos, parseInt(e.accessKey)])
            window.location.reload(true)
        });
        promessa.catch((erro) => console.log(erro.response));
        
    }


    if(habitosDehoje === null) {
        
        return (
            <>
                <HeaderDasPaginas />
                <ContainerTelaHoje>
                    <h1>{diaDaSemana}, {dayjs().get('date')}/{dayjs().get('month')+1}</h1>
                    <span>Não há hábitos registrados para hoje!</span>
                </ContainerTelaHoje>
                <Footer>
                    <span onClick={() => navegacao('/habitos')}>Hábitos</span>
                    <button onClick={() => navegacao('/hoje')}>Hoje</button>
                    <span onClick={() => navegacao('/historico')}>Histórico</span>
                </Footer>
            </>
    
        )

    }else{

        function checarStatus(status){
            return status === true;
        }

        const statusHabitos = habitosDehoje.map(habitos => habitos.done)
        const habitosFeitos = statusHabitos.filter(checarStatus)
        let porcentagemConcluida = ((habitosFeitos.length/habitosDehoje.length)*100).toFixed(2)

        return(
            <SectionConteudo>
                <HeaderDasPaginas />
                <ContainerTelaHoje>
                    <h1>{diaDaSemana}, {dayjs().get('date')}/{dayjs().get('month')+1}</h1>
                    <span>{porcentagemConcluida}% dos hábitos concluídos</span>
                </ContainerTelaHoje>

                {habitosDehoje.map((habito, index) => 
                <>
                    <TituloDoHabitoHoje>
                        <ContainerTituloBotao>
                            <div>
                                <Titulo>{habito.name}</Titulo>
                                <Detalhes>Sequência atual: <DestaqueVerde>{habito.currentSequence} dias</DestaqueVerde></Detalhes>
                                <Detalhes>Seu recorde: {habito.highestSequence} dias</Detalhes>
                            </div>
                            <button accessKey= {index} className = {`${habito.done === true && "habitoConcluido"}`} onClick ={(e) => marcarHabitoFeito(e.target, habito)}><ion-icon accessKey = {index} name="checkmark-sharp"></ion-icon></button>
                        </ContainerTituloBotao>
                    </TituloDoHabitoHoje>
                </>)}

                <Footer>
                    <span onClick={() => navegacao('/habitos')}>Hábitos</span>
                    <button onClick={() => navegacao('/hoje')}>Hoje</button>
                    <span onClick={() => navegacao('/historico')}>Histórico</span>
                </Footer>
            </SectionConteudo>
    

        )
    }
}