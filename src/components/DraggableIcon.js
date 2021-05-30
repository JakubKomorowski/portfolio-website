import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiJavascript,
  SiGatsby,
  SiGraphql,
  SiMaterialUi,
  SiFigma,
  SiStyledComponents,
  SiFirebase,
  SiAdobeillustrator,
  SiGithub,
  SiTypescript,
} from "react-icons/si";
import { AiFillHtml5, AiFillDatabase } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaWordpress } from "react-icons/fa";
import { BsGraphUp, BsFillGearFill } from "react-icons/bs";
import "./styledComponents/icons.css";
import { useContext } from "react";
import Context from "../context";
import { breakPointBig, breakPointSmall } from "../utils/windowBreakPoints";
import { layout, layoutSmall } from "../utils/iconLayout";

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: grab;
  @media (max-width: 1100px) {
    margin: 20px;
  }
`;

const IconName = styled.p`
  background-color: #e5e5e5;
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
          verticalCompact={false}
          autoSize={false}
          isBounded={true}
        >
          <IconWrapper key="JS">
            <SiJavascript size={70} />
            <IconName>JS</IconName>
          </IconWrapper>
          <IconWrapper key="React">
            <FaReact size={70} />
            <IconName>React</IconName>
          </IconWrapper>
          <IconWrapper key="Redux">
            <SiRedux size={70} />
            <IconName>Redux</IconName>
          </IconWrapper>
          <IconWrapper key="HTML">
            <AiFillHtml5 size={70} />
            <IconName>HTML</IconName>
          </IconWrapper>
          <IconWrapper key="CSS">
            <DiCss3 size={70} />
            <IconName>CSS</IconName>
          </IconWrapper>
          <IconWrapper key="Gatsby">
            <SiGatsby size={70} />
            <IconName>Gatsby</IconName>
          </IconWrapper>
          <IconWrapper key="GraphQL">
            <SiGraphql size={70} />
            <IconName>GraphQL</IconName>
          </IconWrapper>
          <IconWrapper key="Material">
            <SiMaterialUi size={70} />
            <IconName>
              Material
              <br />
              UI
            </IconName>
          </IconWrapper>
          <IconWrapper key="Figma">
            <SiFigma size={70} />
            <IconName>Figma</IconName>
          </IconWrapper>
          <IconWrapper key="styled-components">
            <SiStyledComponents size={70} />
            <IconName>
              Styled
              <br />
              Components
            </IconName>
          </IconWrapper>
          <IconWrapper key="Wordpress">
            <FaWordpress size={70} />
            <IconName>Wordpress</IconName>
          </IconWrapper>
          <IconWrapper key="Firebase">
            <SiFirebase size={70} />
            <IconName>Firebase</IconName>
          </IconWrapper>
          <IconWrapper key="SEO">
            <BsGraphUp size={70} />
            <IconName>SEO</IconName>
          </IconWrapper>
          <IconWrapper key="Illustrator">
            <SiAdobeillustrator size={70} />
            <IconName>Illustrator</IconName>
          </IconWrapper>
          <IconWrapper key="rest-api">
            <BsFillGearFill size={70} />
            <IconName>REST API</IconName>
          </IconWrapper>
          <IconWrapper key="Contentful">
            <AiFillDatabase size={70} />
            <IconName>Contentful</IconName>
          </IconWrapper>
          <IconWrapper key="Typescript">
            <SiTypescript size={70} />
            <IconName>TypeScript</IconName>
          </IconWrapper>
          <IconWrapper key="Git">
            <SiGithub size={70} />
            <IconName>Git</IconName>
          </IconWrapper>
        </GridLayout>
      ) : (
        <IconsWrapper>
          <IconWrapper key="JS">
            <SiJavascript size={70} />
            <IconName>JS</IconName>
          </IconWrapper>
          <IconWrapper key="React">
            <FaReact size={70} />
            <IconName>React</IconName>
          </IconWrapper>
          <IconWrapper key="Redux">
            <SiRedux size={70} />
            <IconName>Redux</IconName>
          </IconWrapper>
          <IconWrapper key="HTML">
            <AiFillHtml5 size={70} />
            <IconName>HTML</IconName>
          </IconWrapper>
          <IconWrapper key="CSS">
            <DiCss3 size={70} />
            <IconName>CSS</IconName>
          </IconWrapper>
          <IconWrapper key="Gatsby">
            <SiGatsby size={70} />
            <IconName>Gatsby</IconName>
          </IconWrapper>
          <IconWrapper key="GraphQL">
            <SiGraphql size={70} />
            <IconName>GraphQL</IconName>
          </IconWrapper>
          <IconWrapper key="Material">
            <SiMaterialUi size={70} />
            <IconName>
              Material
              <br />
              UI
            </IconName>
          </IconWrapper>
          <IconWrapper key="Figma">
            <SiFigma size={70} />
            <IconName>Figma</IconName>
          </IconWrapper>
          <IconWrapper key="styled-components">
            <SiStyledComponents size={70} />
            <IconName>
              Styled
              <br />
              Components
            </IconName>
          </IconWrapper>
          <IconWrapper key="Wordpress">
            <FaWordpress size={70} />
            <IconName>Wordpress</IconName>
          </IconWrapper>
          <IconWrapper key="Firebase">
            <SiFirebase size={70} />
            <IconName>Firebase</IconName>
          </IconWrapper>
          <IconWrapper key="SEO">
            <BsGraphUp size={70} />
            <IconName>SEO</IconName>
          </IconWrapper>
          <IconWrapper key="Illustrator">
            <SiAdobeillustrator size={70} />
            <IconName>Illustrator</IconName>
          </IconWrapper>
          <IconWrapper key="rest-api">
            <BsFillGearFill size={70} />
            <IconName>REST API</IconName>
          </IconWrapper>
          <IconWrapper key="Contentful">
            <AiFillDatabase size={70} />
            <IconName>Contentful</IconName>
          </IconWrapper>
          <IconWrapper key="Typescript">
            <SiTypescript size={70} />
            <IconName>Typescript</IconName>
          </IconWrapper>
          <IconWrapper key="Git">
            <SiGithub size={70} />
            <IconName>Git</IconName>
          </IconWrapper>
        </IconsWrapper>
      )}
    </>
  );
};

export default DraggableIcon;
