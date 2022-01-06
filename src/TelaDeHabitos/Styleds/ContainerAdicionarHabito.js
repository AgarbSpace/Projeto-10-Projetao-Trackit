import styled from "styled-components";

const ContainerAdicionarHabito = styled.div `
    width: 340px;
    height: 180px;

    padding-left: 18px;
    padding-right: 18px;

    flex-direction: column;
    align-items: center;

    margin-top: 20px;

    display: ${props => props.adiciona === false ? "none" : "flex"};
`

export default ContainerAdicionarHabito;