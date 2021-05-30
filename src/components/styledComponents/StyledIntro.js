import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 900px;
  align-items: center;
  width: 1500px;
  margin: 0 auto;
  @media (min-width: 2200px) {
    height: 1000px;
  }

  @media (max-width: 1700px) {
    justify-content: space-around;
    width: auto;
    margin: 0 2rem;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    width: auto;
    align-items: flex-start;

    padding-top: 10rem;
    height: 100vh;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    width: auto;
    align-items: flex-start;
    padding-top: 8rem;
    height: 100vh;
  }
`;

export const TextAndButtonsWrapper = styled(motion.div)`
  margin-right: 2rem;

  @media (max-width: 1100px) {
    margin: 0 auto;
  }
`;

export const ProgrammerImgWrapper = styled.div`
  position: relative;
`;

export const ProgrammerImg = styled(motion.img)`
  height: 500px;

  @media (max-width: 1350px) {
    height: 400px;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const StyledEyesWrapper = styled.div`
  position: absolute;
  left: 400px;
  top: 110px;

  @media (max-width: 1350px) {
    left: 320px;
    top: 90px;
  }

  @media (max-width: 1100px) {
    display: none;
  }

  .eye {
    width: 83px;
    height: 83px;
    background-color: white;
    border: 10px solid black;
    display: inline-block;
    border-radius: 50%;
    margin-left: -8px;
    position: relative;
    z-index: 10;

    @media (max-width: 1350px) {
      width: 65px;
      height: 65px;
      border: 8px solid black;
    }
    @media (max-width: 1100px) {
      display: none;
    }
  }
  .eye:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 17px;
    width: 25px;
    height: 25px;
    transform: translate(-50%, -50%);
    background-color: black;
    border-radius: 50%;
    @media (max-width: 1350px) {
      width: 20px;
      height: 20px;
      left: 14px;
    }
    @media (max-width: 1100px) {
      display: none;
    }
  }
`;

export const StyledH1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 550px) {
    font-size: 2.2rem;
  }
`;

export const StyledTagline = styled.p`
  margin-bottom: 1rem;
`;
