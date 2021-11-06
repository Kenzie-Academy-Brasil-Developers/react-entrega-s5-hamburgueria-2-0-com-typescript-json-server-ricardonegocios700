import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => `${props.buttonCor}`};
  color: ${(props) => `${props.fontCor}`};
  width: 100%;
  height: 50px;
  border-radius: 8px;
  cursor: pointer;
  border-style: none;
`;
