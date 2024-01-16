import React, { useContext } from "react";
import { Modal, Fade } from "@mui/material";
import Context from "../context";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "4px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const MessageSentModal = () => {
  const classes = useStyles();

  const value = useContext(Context);
  const { handleMessageSentModalClose, openMessageSentModal } = value;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openMessageSentModal}
        onClose={handleMessageSentModalClose}
        closeAfterTransition
      >
        <Fade in={openMessageSentModal}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
              <AiOutlineCheckCircle size={120} />
            </h2>
            <p id="transition-modal-description">Your message was sent.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default MessageSentModal;
