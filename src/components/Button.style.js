import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  padding: 10px 18px;
  width: 40%;
  border-radius: 10px;

  &:hover {
    background-color: red;
  }

  &:hover {
    & label {
      color: green;
    }
  }
`;


export const ButtonLabel = styled.label`
  font-size: 20px;
  color: white;
  font-weight: 500;
`;


