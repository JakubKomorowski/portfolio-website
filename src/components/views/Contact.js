import React from "react";
import {
  ProjectWrapper,
  WindowWrapper,
  ProjectLabel,
} from "../styledComponents/StyledSection";
import styled from "styled-components";
import { StyledName } from "../styledComponents/StyledWindow";
import ContactForm from "../ContactForm";
import MessageSentModal from "../MessageSentModal";

const StyledContactWrapper = styled.div`
  border: 6px solid black;
  width: 710px;

  @media (max-width: 1100px) {
    margin: 50px;
    width: 100%;
    height: auto;
    border: none;
  }
`;

const StyledContactBar = styled.div`
  width: 698px;
  height: 50px;
  border-bottom: 6px double black;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e5e5;
  @media (max-width: 1100px) {
    width: 100%;
    display: none;
  }
`;

const Contact = () => {
  return (
    <ProjectWrapper name="contact">
      <WindowWrapper contact>
        <ProjectLabel>Contact</ProjectLabel>
        <StyledContactWrapper>
          <StyledContactBar>
            <StyledName>Contact Me</StyledName>
          </StyledContactBar>

          <ContactForm />
        </StyledContactWrapper>
      </WindowWrapper>

      <MessageSentModal />
    </ProjectWrapper>
  );
};

export default Contact;
