import React, { useContext } from "react";
import DraggableComponent from "../DraggableComponent";
import styled from "styled-components";
import Context from "../../context";
import { SiGithub } from "react-icons/si";
import ProjectsInfoModal from "../ProjectsInfoModal";
import {
  ProjectWrapper,
  WindowWrapper,
  ProjectLabel,
} from "../styledComponents/StyledSection";
import ProjectsLiveModal from "../ProjectsLiveModal";

const BottomBar = styled.div`
  width: 100%;
  height: 48px;
  background-color: white;
  border-top: 5px double black;
  position: absolute;
  top: 94%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const MinimalizedWindowWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 10px;
  a {
    color: black;
  }
`;

const MinimalizedWindow = styled.button`
  width: 200px;
  height: 35px;
  background-color: #e5e5e5;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "IBM Plex Mono", monospace;
  font-size: 1rem;
  cursor: pointer;
  border: 2px solid black;
  outline: none;
`;

const Projects = () => {
  const value = useContext(Context);
  const { minimalize, maximalizeWindow } = value;

  return (
    <ProjectWrapper name="projects">
      <WindowWrapper>
        <ProjectLabel>Projects</ProjectLabel>
        <DraggableComponent />
        <BottomBar>
          <MinimalizedWindowWrapper>
            <a
              href="https://github.com/JakubKomorowski"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub size={35} />
            </a>
            {minimalize.map(({ id, projectName }) => {
              return (
                <MinimalizedWindow onClick={() => maximalizeWindow(id)}>
                  <p>{projectName}</p>
                </MinimalizedWindow>
              );
            })}
          </MinimalizedWindowWrapper>
        </BottomBar>
      </WindowWrapper>

      <ProjectsInfoModal />
      <ProjectsLiveModal />
    </ProjectWrapper>
  );
};

export default Projects;
