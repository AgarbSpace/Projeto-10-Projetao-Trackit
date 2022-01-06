import styled from "styled-components";

const Footer = styled.footer `
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;  
    position: relative;

    padding-left: 36px;
    padding-right: 36px;

    span{
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
        color: #52B6FF;
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
        left: 142px;
    }
`

export default Footer;