import { useAutenticador } from "../provedor/autenticador"
import Header from "./style"

export default function HeaderDasPaginas(){
    const {usuario} = useAutenticador();
    console.log(usuario);

    return(
        <Header>
            <span>TrackIt</span>
            <img src = {usuario.image} alt = "foto da pessoa"/>
        </Header>
    )
}