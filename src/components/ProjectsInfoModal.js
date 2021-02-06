import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Context from "../context";

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
  },
}));

const ProjectsInfoModal = () => {
  const classes = useStyles();

  const value = useContext(Context);
  const {
    handleProjectsInfoModalClose,
    openProjectsInfoModal,
    selectedProject,
  } = value;

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
            <h2 id="transition-modal-title">{selectedProject.projectName}</h2>
            <p id="transition-modal-description">
              {selectedProject.projectName}
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ProjectsInfoModal;
