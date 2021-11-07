import styled from "styled-components";

export const ContainerSection = styled.section`
  position: relative;
  right: 0px;
  text-align: left;
  max-width: 460px;
  margin: 10px;
  .spamClick {
    cursor: pointer;
    color: #999999;
  }
  .formTop {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
  }
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
