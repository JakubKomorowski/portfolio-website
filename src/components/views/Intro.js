import React, { useContext } from "react";
import programmer from "../../assets/images/computerdev.png";
import styled from "styled-components";
import Button from "../atoms/Button";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Context from "../../context";

const Wrapper = styled.div`
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

const TextAndButtonsWrapper = styled(motion.div)`
  margin-right: 2rem;

  @media (max-width: 1100px) {
    margin: 0 auto;
  }
`;

const ProgrammerImgWrapper = styled.div`
  position: relative;
`;

const ProgrammerImg = styled(motion.img)`
  height: 500px;

  @media (max-width: 1350px) {
    height: 400px;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;

const StyledEyesWrapper = styled.div`
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

const StyledH1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 550px) {
    font-size: 2.2rem;
  }
`;

const StyledTagline = styled.p`
  margin-bottom: 1rem;
`;

const Intro = () => {
  const eyeball = (e) => {
    const eye = document.querySelectorAll(".eye");

    eye.forEach((el) => {
      const x = el.getBoundingClientRect().left + el.clientWidth / 2;
      const y = el.getBoundingClientRect().top + el.clientHeight / 2;

      const radian = Math.atan2(e.pageX - x, e.pageY - y);
      const rotation = radian * (180 / Math.PI) * -1 + 270;

      el.style.transform = `rotate(${rotation}deg)`;
    });
  };

  document.querySelector("body").addEventListener("mousemove", eyeball);

  const value = useContext(Context);
  const { windowSize, breakPoint } = value;

  return (
    <Wrapper name="intro">
      <TextAndButtonsWrapper
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <StyledH1>
          Hello, <br />
          I’m Kuba,
          <br />
          web developer.
        </StyledH1>
        <StyledTagline>
          I love creating great interfaces and experiences.
        </StyledTagline>
        <Link to="projects" spy={true} smooth={true} offset={90} duration={500}>
          <Button intro>My work</Button>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={90} duration={500}>
          <Button intro second>
            Contact
          </Button>
        </Link>
      </TextAndButtonsWrapper>
      <ProgrammerImgWrapper>
        <StyledEyesWrapper>
          <motion.div
            className="eye"
            animate={{
              height: windowSize < breakPoint ? 65 : 83,
              y: 0,
              opacity: 1,
            }}
            initial={{ height: 0, y: 40, opacity: 0 }}
            transition={{
              opacity: { duration: 0.3, delay: 0.8 },
              duration: 1.5,
              delay: 0.5,
            }}
          />
          <motion.div
            className="eye"
            animate={{
              height: windowSize < breakPoint ? 65 : 83,
              y: 0,
              opacity: 1,
            }}
            initial={{ height: 0, y: 40, opacity: 0 }}
            transition={{
              opacity: { duration: 0.3, delay: 0.8 },
              duration: 1.5,
              delay: 0.5,
            }}
          />
        </StyledEyesWrapper>

        <ProgrammerImg
          src={programmer}
          alt="programer"
          animate={{ y: 0 }}
          initial={{ y: "-100vh" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
        />
      </ProgrammerImgWrapper>
    </Wrapper>
  );
};

export default Intro;
