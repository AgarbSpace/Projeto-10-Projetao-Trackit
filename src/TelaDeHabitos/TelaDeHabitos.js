import Container from "./ContainerStyle"
import AdicionarHabitos from "./AdicionarHabitosStyle"
import Header from '../Header/HeaderDasPaginas';

export default function TelaDeHabitos(){
    return(
        <>
            <Header/>
            <Container>
                <AdicionarHabitos>
                    <span>Meus Hábitos</span>
                    <button>+</button>
                </AdicionarHabitos>
                <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
            </Container>
        </>
    )
}