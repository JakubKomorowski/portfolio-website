import React from "react";
import logo from "../../assets/images/logo monitor1.png";
import { Link } from "react-scroll";
import { bubble as Menu } from "react-burger-menu";
import "./burger.css";
import { useContext } from "react";
import Context from "../../context";
import { breakPointXS } from "../../utils/windowBreakPoints";
import {
  ImgWrapper,
  NavContainer,
  StyledImg,
  StyledLi,
  StyledNavbar,
  StyledUl,
} from "../styledComponents/StyledNav";

const Navbar = () => {
  const value = useContext(Context);
  const { windowSize } = value;
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
