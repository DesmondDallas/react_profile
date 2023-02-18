import styled from "styled-components";
// https://react.school/ui/button
export const Button = styled.button`
  display: inline-block;
  background-color: red;
  color: white;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  width: fit-content;
  padding: 8px 10px;
  border-radius: 3px;
  border: 1px solid red;
  cursor: pointer;
  transition: ease background-color 250ms;
  margin-top: 3%;
  font-weight: bold;

  &:hover {
    background-color: red;
    opacity: 0.9;
  }

  &:hover {
    & label {
      z-index: 100;
    }
  }
`;


export const ButtonLabel = styled.label`
  font-size: 15px;
  color: white;
  font-weight: 500;
  z-index: 100;
`;


