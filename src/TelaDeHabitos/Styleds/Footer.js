import styled from "styled-components";

const Footer = styled.footer `
    width: 375px;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;  
    position: relative;

    padding-left: 20px;
    padding-right: 30px;

    position: fixed;
    top: 667px;


    span{
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
        color: #52B6FF;
    }

    span:hover{
            text-decoration: underline;
    }

    button{
        width: 91px;
        height: 91px;

        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
        color: #FFFFFF;

        border: none;
        border-radius: 50%;

        background-color: #52B6FF;

        position: absolute;
        bottom: 0px;
        left: 138px;
    }
`

export default Footer;