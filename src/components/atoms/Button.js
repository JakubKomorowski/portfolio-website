import React from "react";
import styled, { css } from "styled-components";
import { grey } from "@mui/material/colors";

const StyledButton = styled.button`
  padding: 0.5em 2em;
  background-color: ${grey[200]};
  border: 3px solid black;
  font-size: 1.1rem;
  font-family: "Fira Code", monospace;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background-color: ${grey[300]};
  }
  a {
    color: black;
    text-decoration: none;
  }

  ${({ projects }) =>
    projects &&
    css`
      @media (max-width: 500px) {
        width: 200px;
        margin: 0 auto;
        margin-bottom: 30px;
        font-size: 1rem;
      }
    `}

  ${({ intro }) =>
    intro &&
    css`
      margin-right: ${({ second }) => (second ? "0px" : "50px")};
      margin-top: 40px;
      @media (max-width: 440px) {
        width: 100%;
        margin-top: 20px;
        font-size: 1rem;
      }
    `}

    ${({ contact }) =>
    contact &&
    css`
      @media (max-width: 500px) {
        width: 100%;
      }
    `}
`;

const Button = ({ children, intro, projects, onClickFn, second, contact }) => {
  return (
    <StyledButton
      onClick={onClickFn}
      intro={intro}
      projects={projects}
      second={second}
      contact={contact}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
