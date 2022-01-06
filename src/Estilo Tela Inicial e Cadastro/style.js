import styled from "styled-components";

const TelasIniciais = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form{
        width:303px;
    }
    
    img{
        width: 180px;
        height: 178.38px;

        margin-top: 68px;
        margin-bottom: 32.62px;
    }

    input{
        width: 303px;
        height: 45px;

        border: 1px solid #d5d5d5;
        border-radius: 5px;

        margin-bottom: 5px;
    }

    input::placeholder{
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        color: #dbdbdb;

        padding-top: 9px;
        padding-left: 11px;
    }

    button{
        width: 303px;
        height: 45px;

        font-size: 21px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: center;
        color: #FFFFFF;

        border: none;
        border-radius: 5px;

        background-color: #52B6FF;
    }

    a{
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;

        text-decoration: underline;
        color: #52B6FF;

        margin-top: 25px;
;
    }
`

export default TelasIniciais;