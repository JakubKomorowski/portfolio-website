import styled from "styled-components";

export const StyledWindowWrapper = styled.li`
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  &:first-of-type {
    margin-top: 40px;
  }
  &:last-of-type {
    margin-bottom: 40px;
  }
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const StyledBar = styled.div`
  width: 500px;
  height: 50px;
  border-bottom: 6px double black;
  border-left: 6px solid black;
  border-right: 6px solid black;
  border-top: 6px solid black;
  display: flex;
  align-items: center;
  background-color: #e5e5e5;
  z-index: 10;
  position: relative;
  cursor: grab;
  @media (max-width: 1100px) {
    cursor: auto;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const StyledContent = styled.div`
  border-bottom: 6px solid black;
  border-left: 6px solid black;
  border-right: 6px solid black;
  width: 500px;
  height: 350px;
  background-color: white;
  position: relative;
  pointer-events: auto;
  @media (max-width: 700px) {
    width: 100%;
    height: auto;
  }
`;

export const StyledMinimalize = styled.button`
  border: 2px solid black;
  margin-left: 10px;
  width: 28px;
  height: 28px;
  cursor: pointer;
  background-color: white;
`;

export const StyledQuestionMarkBox = styled.button`
  border: 2px solid black;
  margin-right: 10px;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: white;
  justify-self: end;
  font-family: "Fira Code", monospace;
`;

export const StyledMaximalizeBox = styled.button`
  border: 2px solid black;
  margin-left: 10px;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: white;
`;

export const StyledQuestionMark = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const StyledMinimalizeBar = styled.div`
  border-bottom: 2px solid black;
  margin-left: 2px;
  margin-top: 2px;
  width: 20px;
  height: 18px;
`;

export const MinimalizedContent = styled.div`
  height: 400px;
  width: 1px;
`;

export const StyledName = styled.p`
  justify-self: center;
  font-size: 1.2rem;
  font-weight: 700;
`;

export const StyledBarContentWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  @media (max-width: 1100px) {
    display: flex;
    justify-content: center;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
`;

export const StyledProjectImg = styled.img`
  height: 230px;
  object-fit: cover;
  width: 100%;
`;

export const EmptyButton = styled.div`
  width: 130px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 700px) {
    margin-bottom: 30px;
  }

  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;
  }
`;
