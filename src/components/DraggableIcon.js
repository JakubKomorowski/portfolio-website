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
} from "react-icons/si";
import { AiFillHtml5, AiFillDatabase } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaWordpress, FaSourcetree } from "react-icons/fa";
import { BsGraphUp, BsFillGearFill } from "react-icons/bs";
import "./styledComponents/icons.css";
import { useContext } from "react";
import Context from "../context";

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
  const { windowSize, breakPointBig, breakPointSmall } = value;

  const layout = [
    { i: "JS", x: 4, y: 0, w: 1, h: 1 },
    { i: "React", x: 5, y: 1, w: 1, h: 1 },
    { i: "Redux", x: 6, y: 0, w: 1, h: 1 },
    { i: "HTML", x: 3, y: 0, w: 1, h: 1 },
    { i: "CSS", x: 2, y: 1, w: 1, h: 1 },
    { i: "Gatsby", x: 7, y: 0, w: 1, h: 1 },
    { i: "GraphQL", x: 8, y: 2, w: 1, h: 1 },
    { i: "Material", x: 2, y: 2, w: 1, h: 1 },
    { i: "Figma", x: 5, y: 5, w: 1, h: 1 },
    { i: "styled-components", x: 3, y: 3, w: 1, h: 1 },
    { i: "Wordpress", x: 11, y: 0, w: 1, h: 1 },
    { i: "Firebase", x: 7, y: 3, w: 1, h: 1 },
    { i: "SEO", x: 6, y: 4, w: 1, h: 1 },
    { i: "Git", x: 4, y: 4, w: 1, h: 1 },
    { i: "Illustrator", x: 11, y: 3, w: 1, h: 1 },
    { i: "rest-api", x: 8, y: 1, w: 1, h: 1 },
    { i: "Contentful", x: 11, y: 1, w: 1, h: 1 },
    { i: "Sourcetree", x: 11, y: 2, w: 1, h: 1 },
  ];
  const layoutSmall = [
    { i: "JS", x: 2, y: 0, w: 1, h: 1 },
    { i: "React", x: 3, y: 1, w: 1, h: 1 },
    { i: "Redux", x: 4, y: 0, w: 1, h: 1 },
    { i: "HTML", x: 1, y: 0, w: 1, h: 1 },
    { i: "CSS", x: 0, y: 1, w: 1, h: 1 },
    { i: "Gatsby", x: 5, y: 0, w: 1, h: 1 },
    { i: "GraphQL", x: 6, y: 2, w: 1, h: 1 },
    { i: "Material", x: 0, y: 2, w: 1, h: 1 },
    { i: "Figma", x: 3, y: 5, w: 1, h: 1 },
    { i: "styled-components", x: 1, y: 3, w: 1, h: 1 },
    { i: "Wordpress", x: 7, y: 4, w: 1, h: 1 },
    { i: "Firebase", x: 5, y: 3, w: 1, h: 1 },
    { i: "SEO", x: 4, y: 4, w: 1, h: 1 },
    { i: "Git", x: 2, y: 4, w: 1, h: 1 },
    { i: "Illustrator", x: 7, y: 2, w: 1, h: 1 },
    { i: "rest-api", x: 6, y: 1, w: 1, h: 1 },
    { i: "Contentful", x: 7, y: 5, w: 1, h: 1 },
    { i: "Sourcetree", x: 7, y: 3, w: 1, h: 1 },
  ];
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
          <IconWrapper key="Sourcetree">
            <FaSourcetree size={70} />
            <IconName>Sourcetree</IconName>
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
          <IconWrapper key="Sourcetree">
            <FaSourcetree size={70} />
            <IconName>Sourcetree</IconName>
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
