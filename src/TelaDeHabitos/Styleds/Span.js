import styled from "styled-components";

const Span = styled.span`

        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: #666666;

        margin-top: 28px;

        display: ${props => props.temHabito === false ? 'flex' : 'none'}

`

export default Span;