import styled from "styled-components";

export const HeaderButton  = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 3.5rem;
  padding: 2rem;
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  position: absolute;
  top: 1.5rem;
  margin: 0 1rem;
  justify-content: center;
  cursor: pointer;
  transition: all 300ms;
  &:hover{
    top: 1rem;
    background-color: #ffffff3d;
    border-radius: .5rem;
  }
`;