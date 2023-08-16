import styled from "styled-components";

export const CardWrapper = styled.div`
    background-color: rgba(255, 255, 255, .8);
    padding: 2.5rem;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .15);
    transition: all .2s linear;
    cursor: default;
    &:hover{
        transform: translateY(-1.5rem) scale(1.04);
        box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .3);
    }
`;

