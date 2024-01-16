import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import styled from "styled-components";
import "./styledComponents/icons.css";
import { useContext } from "react";
import Context from "../context";
import { breakPointBig, breakPointSmall } from "../utils/windowBreakPoints";
import { layout, layoutSmall } from "../utils/iconLayout";
import { grey } from "@mui/material/colors";

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
  @media (max-width: 1100px) {
    margin: 20px;
  }
`;

const IconName = styled.p`
  background-color: ${grey[200]};
  padding: 1px 6px;
  margin-top: 5px;
  text-align: center;
  min-width: 50px;
`;

const IconsWrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  margin: 20px;
`;

const GridLayout = WidthProvider(RGL);

const DraggableIcon = () => {
  const value = useContext(Context);
  const { windowSize } = value;

  return (
    <>
      {windowSize > breakPointSmall ? (
        <GridLayout
          className="layout"
          layout={windowSize > breakPointBig ? layout : layoutSmall}
          cols={windowSize > breakPointBig ? 12 : 8}
          rowHeight={120}
          width={windowSize > breakPointBig ? 1200 : 800}
          isResizable={false}
          preventCollision={true}
          compactType={null}
          autoSize={false}
        >
          {layout.map((item) => {
            return (
              <IconWrapper key={item.i}>
                {item.icon}
                <IconName>{item.i}</IconName>
              </IconWrapper>
            );
          })}
        </GridLayout>
      ) : (
        <IconsWrapper>
          {layoutSmall.map((item) => {
            return (
              <IconWrapper key={item.i}>
                {item.icon}
                <IconName>{item.i}</IconName>
              </IconWrapper>
            );
          })}
        </IconsWrapper>
      )}
    </>
  );
};

export default DraggableIcon;
