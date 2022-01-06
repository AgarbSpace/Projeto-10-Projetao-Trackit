import styled from "styled-components";

const Input = styled.input `
    width: 303px;
    height: 45px;

    border: 1px solid #d5d5d5;
    border-radius: 5px;

    margin-bottom: 5px;

    ::placeholder{
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        color: #dbdbdb;

        padding-top: 9px;
        padding-left: 11px;
    }

`

export default Input;