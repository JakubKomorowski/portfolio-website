import React from "react";
import logo from "../../assets/images/logo monitor1.png";
import styled from "styled-components";
import { Link } from "react-scroll";
import { bubble as Menu } from "react-burger-menu";
import "./burger.css";
import { useContext } from "react";
import Context from "../../context";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  border-bottom: 6px double black;
  width: 100vw;
  height: 3rem;
  box-sizing: content-box;
  position: fixed;
  background-color: #e5e5e5;
  z-index: 2000;

  @media (max-width: 700px) {
    width: 100vw;
  }
`;
const NavContainer = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 700px) {
    background-color: #e5e5e5;
    height: 50px;
    position: fixed;
    width: 100%;
    border-bottom: 4px double black;
    box-sizing: content-box;
    z-index: 2001;
  }
`;

const StyledLi = styled.li`
  height: 100%;
  margin-left: 1rem;
  text-align: center;
  cursor: pointer;
  width: 100px;
  font-weight: 700;
  &:hover {
    letter-spacing: 1.5px;
  }
  @media (max-width: 700px) {
    margin-left: 0.2rem;
    font-weight: 400;
    width: 235px;

    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
  }
`;

const ImgWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 2rem;
  @media (max-width: 700px) {
    margin-left: 1.5rem;
  }
  cursor: pointer;
`;

const StyledImg = styled.img`
  height: 2rem;
`;

const Navbar = ({ name }) => {
  const value = useContext(Context);
  const { windowSize, breakPointXS } = value;
  return (
    <>
      {windowSize > breakPointXS ? (
        <StyledNavbar>
          <NavContainer>
            <Link to="intro" spy={true} smooth={true} offset={0} duration={500}>
              <ImgWrapper>
                <StyledImg src={logo} alt="logo" />
              </ImgWrapper>
            </Link>
            <StyledUl>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={90}
                duration={500}
              >
                <StyledLi>
                  <p>Projects</p>
                </StyledLi>
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={90}
                duration={500}
              >
                <StyledLi>
                  <p>Skills</p>
                </StyledLi>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={90}
                duration={500}
              >
                <StyledLi>
                  <p>Contact</p>
                </StyledLi>
              </Link>
            </StyledUl>
          </NavContainer>
        </StyledNavbar>
      ) : (
        <nav>
          <StyledUl>
            <Link to="intro" spy={true} smooth={true} offset={0} duration={500}>
              <ImgWrapper>
                <StyledImg src={logo} alt="logo" />
              </ImgWrapper>
            </Link>
            <Menu right noOverlay>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={90}
                duration={500}
              >
                <StyledLi>
                  <p>Projects</p>
                </StyledLi>
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={90}
                duration={500}
              >
                <StyledLi>
                  <p>Skills</p>
                </StyledLi>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={90}
                duration={500}
              >
                <StyledLi>
                  <p>Contact</p>
                </StyledLi>
              </Link>
            </Menu>
          </StyledUl>
        </nav>
      )}
    </>
  );
};

export default Navbar;
