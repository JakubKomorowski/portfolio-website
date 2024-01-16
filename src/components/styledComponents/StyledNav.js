import styled from "styled-components";
import { grey } from "@mui/material/colors";

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  border-bottom: 6px double black;
  width: 100vw;
  height: 3rem;
  box-sizing: content-box;
  position: fixed;
  background-color: ${grey[200]};
  z-index: 2000;

  @media (max-width: 700px) {
    width: 100vw;
  }
`;
export const NavContainer = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 700px) {
    background-color: ${grey[200]};
    height: 50px;
    position: fixed;
    width: 100%;
    border-bottom: 4px double black;
    box-sizing: content-box;
    z-index: 2001;
  }
`;

export const StyledLi = styled.li`
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

export const ImgWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 2rem;
  @media (max-width: 700px) {
    margin-left: 1.5rem;
  }
  cursor: pointer;
`;

export const StyledImg = styled.img`
  height: 2rem;
`;
