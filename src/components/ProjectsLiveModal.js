import React, { useContext } from "react";
import { Modal, Fade } from "@mui/material";
import Context from "../context";
import styled from "styled-components";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    outline: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 0),
  },
}));

const IFrameWrapper = styled.div`
  max-width: 90% !important;

  iframe {
    max-width: 100% !important;
    max-height: 90vh;
  }
`;

const ProjectsLiveModal = () => {
  const classes = useStyles();

  const value = useContext(Context);
  const {
    handleProjectsLiveModalClose,
    openProjectsLiveModal,
    selectedProject,
  } = value;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openProjectsLiveModal}
        onClose={handleProjectsLiveModalClose}
        closeAfterTransition
      >
        <Fade in={openProjectsLiveModal}>
          <IFrameWrapper className={classes.paper}>
            <iframe
              name="test"
              title="test"
              src={selectedProject.buttonLive}
              width="1500"
              height="800"
              maxHeight="100vh"
            ></iframe>
          </IFrameWrapper>
        </Fade>
      </Modal>
    </div>
  );
};

export default ProjectsLiveModal;
