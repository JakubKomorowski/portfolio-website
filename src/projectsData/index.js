import huntingImg from "../assets/images/hunting.PNG";
import kiteShopImg from "../assets/images/kite-shop-image.PNG";
import adminImg from "../assets/images/admin.PNG";
import trustcatcherImg from "../assets/images/trustcatcher.PNG";
import padsImg from "../assets/images/pads.PNG";

export const initialDraggableList = [
  {
    id: 2,
    status: false,
    zIndex: 1000,
    projectName: "Admin Panel",
    bounds: { left: 0, top: 0, right: 985, bottom: 386 },
    boundsMedium: { left: 0, top: 0, right: 785, bottom: 386 },
    boundsSmall: { left: 0, top: 0, right: 535, bottom: 386 },
    defaultPosition: { x: 50, y: 50 },
    defaultPositionSmall: { x: 50, y: 50 },
    minimalizeStatus: false,
    projectImage: adminImg,
    wordpress: false,
    buttonLive: "https://admin-panel-react-app.netlify.app/",
    buttonGithub: "https://github.com/JakubKomorowski/admin_panel",
    description:
      "Fictional admin panel application that enables users to add and track client's orders. Users can set the delivery date, check if the order is paid and also add, edit and remove products from each order. It’s based on React Redux and Firebase. This project helped me to strengthen my Redux and Material-UI skills.",
    adminPanel: true,
    skills: [
      "React",
      "React-Router-Dom",
      "Redux",
      "Firebase",
      "Styled-Components",
      "Material-UI",
    ],
  },
  {
    id: 3,
    status: false,
    zIndex: 1000,
    projectName: "Euc Pads Shop",
    bounds: { left: 0, top: -400, right: 985, bottom: -14 },
    boundsMedium: { left: 0, top: -400, right: 785, bottom: -14 },
    boundsSmall: { left: 0, top: -400, right: 535, bottom: -14 },
    defaultPosition: { x: 100, y: -295 },
    defaultPositionSmall: { x: 100, y: -295 },
    minimalizeStatus: false,
    projectImage: padsImg,
    wordpress: false,
    buttonLive: "https://pads.vercel.app/",
    buttonGithub: "https://github.com/JakubKomorowski/pads",
    description:
      "It is not finished project of EUC accessories shop (client decided to not start with this business).",
    skills: ["Next", "Tailwind", "Stripe", "ThreeJs", "I18n"],
  },
  {
    id: 4,
    status: false,
    zIndex: 1000,
    projectName: "Trust Catcher",
    bounds: { left: 0, top: -800, right: 985, bottom: -414 },
    boundsMedium: { left: 0, top: -800, right: 785, bottom: -414 },
    boundsSmall: { left: 0, top: -800, right: 535, bottom: -414 },
    defaultPosition: { x: 150, y: -640 },
    defaultPositionSmall: { x: 150, y: -640 },
    minimalizeStatus: false,
    projectImage: trustcatcherImg,
    wordpress: true,
    buttonLive: "https://www.trustcatcher.com/",
    // buttonGithub:
    //   "https://github.com/JakubKomorowski/draggable-note-list_redux-typescript",
    description:
      "I'm during the development of SaaS project that will help webmasters to collect, manage and publish customer's testimonials",
    skills: ["Next", "Firebase", "TypeScript", "Tailwind", "Stripe", "Sanity"],
  },
];
