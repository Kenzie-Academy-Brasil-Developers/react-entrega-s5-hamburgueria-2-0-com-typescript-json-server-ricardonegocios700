import styled from "styled-components";

export const ContainerSection = styled.section`
  /* display: flex;
  flex-direction: row;
  flex-wrap: nowrap; */
  text-align: left;
  max-width: 460px;
  margin: 10px;
  /* div {
    flex-basis: 60%;
  }
  img {
    flex-basis: 40%;
    align-self: flex-start;
  } */
`;

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  div,
  button,
  input {
    margin: 5px 0;
  }
  p {
    font-size: 14px;
    color: #999999;
    text-align: center;
    margin: 0 15%;
  }
`;
