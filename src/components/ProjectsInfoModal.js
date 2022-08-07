import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Context from "../context";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "4px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "1000px",
    maxWidth: "90%",
    maxHeight: "90%",
    overflowY: "auto",
    outline: "none",
  },
}));

const StyledH2 = styled.h2`
  margin-bottom: 10px;
`;

const StyledH3 = styled.h3`
  margin: 10px 0;
`;

const StyledStackWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 10px;
  max-width: 700px;
`;

const StyledStackItem = styled.p`
  background-color: ${({ theme }) => theme.bgGray};
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 200px;
  font-size: 0.9rem;
  &:first-of-type {
    margin-left: 0;
  }
`;

const ProjectsInfoModal = () => {
  const classes = useStyles();

  const value = useContext(Context);
  const {
    handleProjectsInfoModalClose,
    openProjectsInfoModal,
    selectedProject,
  } = value;

  const { projectName, description, skills } = selectedProject;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openProjectsInfoModal}
        onClose={handleProjectsInfoModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openProjectsInfoModal}>
          <div className={classes.paper}>
            <StyledH2 id="transition-modal-title">{projectName}</StyledH2>
            <p id="transition-modal-description">{description}</p>
            <StyledH3>Technologies</StyledH3>
            <StyledStackWrapper>
              {skills.map((el) => {
                return <StyledStackItem>{el}</StyledStackItem>;
              })}
            </StyledStackWrapper>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ProjectsInfoModal;
