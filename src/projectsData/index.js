import huntingImg from "../assets/images/hunting.PNG";
import kiteShopImg from "../assets/images/kite-shop-image.PNG";
import adminImg from "../assets/images/admin.PNG";
import kitchenImg from "../assets/images/kitchen.PNG";

export const initialDraggableList = [
  {
    id: 1,
    status: false,
    zIndex: 1000,
    projectName: "Kitchen Dock",

    bounds: { left: 0, top: 0, right: 985, bottom: 386 },
    boundsMedium: { left: 0, top: 0, right: 785, bottom: 386 },
    boundsSmall: { left: 0, top: 0, right: 535, bottom: 386 },
    defaultPosition: { x: 400, y: 300 },
    defaultPositionSmall: { x: 400, y: 300 },
    minimalizeStatus: false,
    projectImage: kitchenImg,
    wordpress: true,
    buttonLive: "https://kitchendock.com/juicers/best-cold-press-juicer/",
    buttonGithub: "",
    description:
      "My newest commercial WordPress website. For this project, I created a custom plugin to display products in the specific way.",
  },
  {
    id: 2,
    status: false,
    zIndex: 1000,
    projectName: "The Hunting Dog",
    bounds: { left: 0, top: -400, right: 985, bottom: -14 },
    boundsMedium: { left: 0, top: -400, right: 785, bottom: -14 },
    boundsSmall: { left: 0, top: -400, right: 535, bottom: -14 },
    defaultPosition: { x: 600, y: -300 },
    defaultPositionSmall: { x: 100, y: -300 },
    minimalizeStatus: false,
    projectImage: huntingImg,
    wordpress: true,
    buttonLive: "https://www.the-hunting-dog.com/",
    buttonGithub: "",
    description:
      "My biggest commercial WordPress website that I've ranked on Google. This project is 3 years old. During the first two years, I was focused on gaining knowledge about SEO and converting it into action.",
  },
  {
    id: 3,
    status: false,
    zIndex: 1000,
    projectName: "Kite Shop",
    bounds: { left: 0, top: -800, right: 985, bottom: -414 },
    boundsMedium: { left: 0, top: -800, right: 785, bottom: -414 },
    boundsSmall: { left: 0, top: -800, right: 535, bottom: -414 },
    defaultPosition: { x: 200, y: -770 },
    defaultPositionSmall: { x: 200, y: -770 },
    minimalizeStatus: false,
    projectImage: kiteShopImg,
    wordpress: false,
    buttonLive: "https://kite-shop-react-app.netlify.app/",
    buttonGithub: "https://github.com/JakubKomorowski/kite_shop_react_app",
    description:
      "It's a project of a fictional online kitesurfing shop. Among the others, this application contains the functionality of sorting, filtering, searching, and adding products to the cart. It’s based on Context Api and Contentful Api. It is styled using Styled-Components and Material-UI. Thanks to this project, I immersed myself in React and learned styled-components.",
    kiteShop: true,
    // kiteShop: [
    //   "React",
    //   "React-Router-Dom",
    //   "Context API",
    //   "Contentful CMS",
    //   "Styled-Components",
    //   "Formik",
    //   "Yup",
    //   "Material-UI",
    // ],
  },
  {
    id: 4,
    status: false,
    zIndex: 1000,
    projectName: "Admin Panel",
    bounds: { left: 0, top: -1200, right: 985, bottom: -814 },
    boundsMedium: { left: 0, top: -1200, right: 785, bottom: -814 },
    boundsSmall: { left: 0, top: -1200, right: 535, bottom: -814 },
    defaultPosition: { x: 750, y: -970 },
    defaultPositionSmall: { x: 300, y: -970 },
    minimalizeStatus: false,
    projectImage: adminImg,
    wordpress: false,
    buttonLive: "https://admin-panel-react-app.netlify.app/",
    buttonGithub: "https://github.com/JakubKomorowski/admin_panel",
    description:
      "Fictional admin panel application that enables users to add and track client's orders. Users can set the delivery date, check if the order is paid and also add, edit and remove products from each order. It’s based on React Redux and Firebase. This project helped me to strengthen my Redux and Material-UI skills.",
    adminPanel: true,
  },
];
//"https://streamable.com/ovq75h"
