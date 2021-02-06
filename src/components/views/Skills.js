import React from "react";
import {
  ProjectWrapper,
  WindowWrapper,
  ProjectLabel,
} from "../styledComponents/StyledSection";
import "../styledComponents/icons.css";
import DraggableIcon from "../DraggableIcon";

const Skills = () => {
  return (
    <ProjectWrapper white name="skills">
      <WindowWrapper>
        <ProjectLabel labelType="gray">Skills</ProjectLabel>
        <DraggableIcon />
      </WindowWrapper>
    </ProjectWrapper>
  );
};

export default Skills;
