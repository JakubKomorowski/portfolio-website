import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Context from "../context";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "4px solid #000",
    border: "none",
    outline: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 0),
  },
}));

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
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openProjectsLiveModal}>
          <div className={classes.paper}>
            {/* <ReactPlayer
              width="900px"
              height="455px"
              url={selectedProject.buttonLive}
            /> */}
            <iframe
              name="test"
              title="test"
              src={selectedProject.buttonLive}
              width="1500"
              height="800"
            ></iframe>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ProjectsLiveModal;
