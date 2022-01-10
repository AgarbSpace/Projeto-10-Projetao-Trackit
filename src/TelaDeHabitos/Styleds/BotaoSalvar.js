import styled from "styled-components";

const BotaoSalvar = styled.button `
    width: 84px;
    height: 35px;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFFFFF;

    background-color: #52B6FF;

    border: none;
    border-radius: 5px;

    margin-left: 23px;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: ${props => props.statusDaTela === "atualizando" ? "0.7" : "1"};
        
    :hover{
        cursor: ${props => props.statusDaTela === "atualizando" ? "not-allowed" : "default"};
    }

    div{
        height: 35px;
        width: 35px;
    }
`

export default BotaoSalvar;