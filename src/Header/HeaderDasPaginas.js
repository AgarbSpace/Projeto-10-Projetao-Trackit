import { useAutenticador } from "../provedor/autenticador"
import Header from "./style"

export default function HeaderDasPaginas(){
    const {usuario} = useAutenticador();

    return(
        <Header>
            <span>TrackIt</span>
            <img src = {usuario.image} alt = "foto da pessoa"/>
        </Header>
    )
}