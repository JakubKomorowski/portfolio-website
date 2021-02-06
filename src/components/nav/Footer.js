import React from "react";
import styled from "styled-components";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const FooterWrapper = styled.footer`
  padding: 1rem 0;
  background: #c4c4c4;
  color: black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FooterTextWrapper = styled.p`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  p {
    padding-left: 10px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTextWrapper>
        <span style={{ fontSize: "1rem" }}>&copy;</span> 2021 Created by Jakub
        Komorowski
      </FooterTextWrapper>

      <FooterTextWrapper>
        <AiOutlineMail size={20} />
        <p>jakub.komorowski01@gmail.com</p>
      </FooterTextWrapper>
      <FooterTextWrapper>
        <FaMobileAlt size={20} />
        <p> +48 792 683 631</p>
      </FooterTextWrapper>
    </FooterWrapper>
  );
};

export default Footer;
