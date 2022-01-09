import styled from "styled-components";

const Header = styled.header`
    width: 375px;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-left: 18px;
    padding-right: 10px;

    background-color: #126BA5;

    position: fixed;
    left:0;
    top:0;
    z-index: 2;

    span{
        font-family: 'Playball';
        font-size: 39px;
        font-weight: 400;
        line-height: 49px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF
    }

    img{
        width: 51px;
        height: 51px;

        border-radius: 50%;
    }
`

export default Header;