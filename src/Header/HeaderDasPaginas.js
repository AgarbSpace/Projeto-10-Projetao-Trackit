import logo from "../../src/logo/logoTrackIt.png"
import Header from "./style"

export default function HeaderDasPaginas(){
    return(
        <Header>
            <span>TrackIt</span>
            <img src = {logo} alt = "foto da pessoa"/>
        </Header>
    )
}