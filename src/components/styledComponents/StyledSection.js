import styled, { css } from "styled-components";

export const ProjectWrapper = styled.section`
  height: 1200px;
  background-color: ${({ white }) =>
    white ? "white" : ({ theme }) => theme.bgGray};
  display: flex;
  align-items: center;
  position: relative;

  //#E5E5E5
  //#B4BDC8
  //#adb5bd
  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
  }
`;

export const WindowWrapper = styled.div`
  width: 1500px;
  height: 800px;
  border: 10px solid black;
  margin: 0 auto;
  background-color: white;
  margin-top: 50px;
  position: relative;

  ${({ contact }) =>
    contact &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  @media (max-width: 1600px) {
    width: 1300px;
    margin-bottom: 70px;
  }
  @media (max-width: 1350px) {
    width: 1050px;
  }

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 90%;
    margin-top: 150px;
  }
  @media (max-width: 700px) {
    border: 8px solid black;
  }
`;

export const ProjectLabel = styled.div`
  position: absolute;
  top: -150px;
  left: -10px;
  background-color: white;
  color: black;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  font-weight: 700;
  font-size: 3rem;
  margin-top: 50px;
  border: 10px solid black;

  /* ${({ labelType }) =>
    labelType === "gray" &&
    css`
      background-color: #e5e5e5;
    `} */

  @media (max-width: 1100px) {
    width: 100%;
    height: 70px;
    border: 10px solid black;
    box-sizing: content-box;
    font-size: 2.5rem;
    top: -140px;
  }
  @media (max-width: 700px) {
    border: 8px solid black;
    left: -8px;
    top: -136px;
  }
`;
