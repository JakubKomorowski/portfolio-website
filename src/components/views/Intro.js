import React, { useContext } from "react";
import programmer from "../../assets/images/computerdev.png";
import Button from "../atoms/Button";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Context from "../../context";
import { breakPoint } from "../../utils/windowBreakPoints";
import {
  TextAndButtonsWrapper,
  Wrapper,
  StyledH1,
  StyledTagline,
  ProgrammerImgWrapper,
  StyledEyesWrapper,
  ProgrammerImg,
} from "../styledComponents/StyledIntro";

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
  const { windowSize } = value;

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
