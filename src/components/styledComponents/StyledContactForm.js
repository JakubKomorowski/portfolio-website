import styled from "styled-components";
import { Form, Field } from "formik";

export const StyledField = styled(Field)`
  width: 100%;
  display: block;
  border: 3px solid black;
  height: 2.5rem;
  margin-top: 5px;
  font-size: 1rem;
  outline: none;
  font-family: "Fira Code", monospace;
  &:focus {
    border: 4px solid black;
  }
`;

export const StyledFieldWrapper = styled.div`
  margin-top: 20px;
  &:first-child {
    margin-top: 0;
  }
`;

export const StyledMessage = styled(Field)`
  width: 100%;
  display: block;
  background-color: white;
  border: 3px solid black;
  height: 10rem;
  margin-top: 5px;
  resize: none;
  outline: none;
  font-size: 1rem;
  font-family: "Fira Code", monospace;
  &:focus {
    border: 4px solid black;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1100px) {
    border: none;
  }
`;

export const StyledFormik = styled(Form)`
  z-index: 5;
  padding: 3rem 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 700px) {
    width: 100%;
    margin: 0 auto;
    padding: 3rem 3rem;
    height: auto;
  }
  @media (max-width: 500px) {
    padding: 3rem 2rem;
  }
`;

export const StyledErrorWrapper = styled.div`
  color: red;
`;

export const StyledButton = styled.div`
  margin-top: 2rem;
`;
