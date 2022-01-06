import ReactDom from "react-dom";
import App from "./App";
import {ProvedorAutenticacao} from "./provedor/autenticador";


ReactDom.render(
<ProvedorAutenticacao>
    <App/>
</ProvedorAutenticacao>
, document.querySelector(".root"));