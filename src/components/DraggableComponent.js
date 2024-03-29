import React, { useContext } from "react";
import Context from "../context";
import Draggable from "react-draggable";
import "./styledComponents/draggable.css";
import {
  StyledBar,
  StyledContent,
  StyledMinimalize,
  StyledQuestionMarkBox,
  StyledQuestionMark,
  StyledMinimalizeBar,
  MinimalizedContent,
  StyledName,
  StyledBarContentWrapper,
  StyledButtonsWrapper,
  StyledProjectImg,
  ButtonsWrapper,
  StyledMaximalizeBox,
  StyledWindowWrapper,
  EmptyButton,
} from "./styledComponents/StyledWindow";
import Button from "./atoms/Button";
import { CgMaximizeAlt } from "react-icons/cg";
import {
  breakPoint,
  breakPointBig,
  breakPointSmall,
} from "../utils/windowBreakPoints";

const DraggableComponent = () => {
  const value = useContext(Context);
  const {
    draggableList,
    stopDraggableList,
    startDraggableList,
    minimalizeWindow,
    onTop,
    selectProject,
    handleProjectsInfoModalOpen,
    handleProjectsLiveModalOpen,
    windowSize,
  } = value;

  return (
    <>
      {draggableList.map((item) => {
        const {
          id,
          zIndex,
          defaultPosition,
          projectName,
          bounds,
          boundsMedium,
          boundsSmall,
          minimalizeStatus,
          projectImage,
          buttonGithub,
          buttonLive,
          defaultPositionSmall,
          wordpress,
        } = item;
        return (
          <div key={id}>
            {windowSize > breakPointSmall ? (
              <Draggable
                onStart={() => startDraggableList(id)}
                onStop={() => stopDraggableList(id)}
                handle=".handle"
                defaultPosition={
                  windowSize > breakPoint
                    ? defaultPosition
                    : defaultPositionSmall
                }
                position={null}
                bounds={
                  windowSize > breakPointBig
                    ? bounds
                    : windowSize > breakPoint
                    ? boundsMedium
                    : boundsSmall
                }
                scale={1}
              >
                {minimalizeStatus ? (
                  <MinimalizedContent />
                ) : (
                  <div
                    className={`draggable-block-container`}
                    style={{
                      zIndex: zIndex,
                      position: "relative",
                    }}
                  >
                    <StyledBar className="handle">
                      <StyledBarContentWrapper>
                        <StyledButtonsWrapper>
                          <StyledMinimalize
                            onClick={() => minimalizeWindow(id)}
                          >
                            <StyledMinimalizeBar />
                          </StyledMinimalize>
                          <StyledMaximalizeBox
                            onClick={() => {
                              selectProject(id);
                              handleProjectsLiveModalOpen();
                            }}
                          >
                            <CgMaximizeAlt size={20} />
                          </StyledMaximalizeBox>
                        </StyledButtonsWrapper>
                        <StyledName>{projectName}</StyledName>
                        <StyledQuestionMarkBox
                          onClick={() => {
                            selectProject(id);
                            handleProjectsInfoModalOpen();
                          }}
                        >
                          <StyledQuestionMark>?</StyledQuestionMark>
                        </StyledQuestionMarkBox>
                      </StyledBarContentWrapper>
                    </StyledBar>

                    <StyledContent onClick={() => onTop(id)}>
                      <StyledProjectImg src={projectImage} alt="" />
                      <ButtonsWrapper>
                        {wordpress ? (
                          <EmptyButton />
                        ) : (
                          <a
                            href={buttonGithub}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Button>Github</Button>
                          </a>
                        )}
                        <a href={buttonLive} target="_blank" rel="noreferrer">
                          <Button>Live</Button>
                        </a>
                      </ButtonsWrapper>
                    </StyledContent>
                  </div>
                )}
              </Draggable>
            ) : (
              <StyledWindowWrapper>
                <StyledBar>
                  <StyledBarContentWrapper>
                    <div></div>
                    <StyledName>{projectName}</StyledName>
                    <StyledQuestionMarkBox
                      onClick={() => {
                        selectProject(id);
                        handleProjectsInfoModalOpen();
                      }}
                    >
                      <StyledQuestionMark>?</StyledQuestionMark>
                    </StyledQuestionMarkBox>
                  </StyledBarContentWrapper>
                </StyledBar>
                <StyledContent>
                  <StyledProjectImg src={projectImage} alt="" />

                  <ButtonsWrapper>
                    {wordpress ? (
                      <EmptyButton />
                    ) : (
                      <a href={buttonGithub} target="_blank" rel="noreferrer">
                        <Button projects>Github</Button>
                      </a>
                    )}

                    <a href={buttonLive} target="_blank" rel="noreferrer">
                      <Button projects>Live</Button>
                    </a>
                  </ButtonsWrapper>
                </StyledContent>
              </StyledWindowWrapper>
            )}
          </div>
        );
      })}
    </>
  );
};

export default DraggableComponent;
