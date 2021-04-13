import React, { useState, useEffect } from "react";
import Intro from "./components/views/Intro";
import Projects from "./components//views/Projects";
import GlobalStyle from "./theme/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import Context from "./context";
import { initialDraggableList } from "./projectsData";
import Skills from "./components/views/Skills";
import Navbar from "./components/nav/Navbar";
import Contact from "./components/views/Contact";
import Footer from "./components/nav/Footer";
import { theme } from "./theme/theme";

const Wrapper = styled.div`
  overflow-x: hidden;
`;

const App = () => {
  const [draggableList, setDraggableList] = useState([...initialDraggableList]);
  const [minimalize, setMinimalize] = useState([]);
  const [openProjectsInfoModal, setOpenProjectsInfoModal] = useState(false);
  const [openProjectsLiveModal, setOpenProjectsLiveModal] = useState(false);
  const [openMessageSentModal, setOpenMessageSentModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState({
    skills: [],
  });

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowSize(window.innerWidth);
  };

  const breakPointBig = 1600;
  const breakPoint = 1350;
  const breakPointSmall = 1100;
  const breakPointXS = 700;

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  const selectProject = (id) => {
    const filteredProject = draggableList.find((el) => el.id === id);
    setSelectedProject(filteredProject);
    console.log(filteredProject);
  };

  const handleProjectsInfoModalOpen = () => {
    setOpenProjectsInfoModal(true);
  };

  const handleProjectsInfoModalClose = () => {
    setOpenProjectsInfoModal(false);
  };

  const handleProjectsLiveModalOpen = () => {
    setOpenProjectsLiveModal(true);
  };

  const handleProjectsLiveModalClose = () => {
    setOpenProjectsLiveModal(false);
  };

  const handleMessageSentModalOpen = () => {
    setOpenMessageSentModal(true);
  };

  const handleMessageSentModalClose = () => {
    setOpenMessageSentModal(false);
  };

  const showAndCloseMessageSentModal = () => {
    setOpenMessageSentModal(true);
    setTimeout(() => {
      setOpenMessageSentModal(false);
    }, 2000);
  };

  const minimalizeWindow = (id) => {
    const newDraggable = draggableList.map((el) => {
      if (el.id === id) {
        el.minimalizeStatus = !el.minimalizeStatus;
      }
      return el;
    });

    const minimalizedWindow = draggableList.find((el) => el.id === id);
    setMinimalize([...new Set([...minimalize, minimalizedWindow])]);

    setDraggableList([...newDraggable]);
  };

  const maximalizeWindow = (id) => {
    const deleteFromMinimalized = minimalize.filter((el) => el.id !== id);
    const newDraggable = draggableList.map((el) => {
      if (el.id === id) {
        el.minimalizeStatus = !el.minimalizeStatus;
      }
      return el;
    });
    setMinimalize([...deleteFromMinimalized]);
    setDraggableList([...newDraggable]);
  };

  const startDraggableList = (id) => {
    const newDraggableList = draggableList.map((item) => {
      if (item.id === id) {
        item.status = true;
        item.zIndex = 1000;
      } else {
        item.status = false;
        item.zIndex--;
      }
      return item;
    });

    setDraggableList([...newDraggableList]);
  };

  const stopDraggableList = (id) => {
    const newDraggableList = draggableList.map((item) => {
      if (item.id === id) {
        item.status = false;
      }
      return item;
    });

    setDraggableList([...newDraggableList]);
  };

  const onTop = (id) => {
    const newDraggableList = draggableList.map((item) => {
      if (item.id === id) {
        item.zIndex = 1000;
      } else {
        item.zIndex--;
      }
      return item;
    });

    setDraggableList([...newDraggableList]);
  };

  return (
    <Context.Provider
      value={{
        draggableList,
        stopDraggableList,
        startDraggableList,
        minimalizeWindow,
        minimalize,
        onTop,
        maximalizeWindow,
        openProjectsInfoModal,
        handleProjectsInfoModalOpen,
        handleProjectsInfoModalClose,
        selectProject,
        selectedProject,
        openProjectsLiveModal,
        handleProjectsLiveModalOpen,
        handleProjectsLiveModalClose,
        handleMessageSentModalOpen,
        handleMessageSentModalClose,
        openMessageSentModal,
        showAndCloseMessageSentModal,
        windowSize,
        breakPoint,
        breakPointBig,
        breakPointSmall,
        breakPointXS,
      }}
    >
      <Wrapper>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Navbar />
          <Intro />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </ThemeProvider>
      </Wrapper>
    </Context.Provider>
  );
};

export default App;
