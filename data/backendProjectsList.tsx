import { BiLogoJavascript } from "react-icons/bi";

export const backendProjectsList = [
  {
    imageSrc: "/images/projects/ai-gen-bms.png",
    imageAltText: "Blog Management System",
    title: "Blog Management System",
    link: "https://github.com/reginaldsc02/bms-backend-mongodb",
    repoName: "bms-backend-mongodb",
    description:
      "This project is a fully-featured Blog Management System (BMS) backend built with Node.js, Express, MongoDB, and Redis.",
    programmingLanguage: "JavaScript",
    programmingLanguageIcon: <BiLogoJavascript />,
    id: "@bms",
  },

  {
    imageSrc: "/images/projects/ai-gen-nms.png",
    imageAltText: "Notification Management System Microservice",
    title: "Notification Management System",
    link: "https://github.com/reginaldsc02/nms-microservice",
    repoName: "nms-microservice",
    description:
      "This project is a comprehensive Notification Management System (NMS) backend built with Node.js, Express, Redis, KafkaJS, Bull and JavaScript.",
    programmingLanguage: "JavaScript",
    programmingLanguageIcon: <BiLogoJavascript />,
    id: "@nms",
  },

  {
    imageSrc: "/images/projects/ai-gen-fum.png",
    imageAltText: "File Upload Microservice",
    title: "File Upload Microservice",
    link: "https://github.com/reginaldsc02/file-upload-microservice",
    repoName: "file-upload-microservice",
    description:
      "This project is a robust File Upload Microservice backend built with Node.js, Express, Redis, Bull, and Firebase.",
    programmingLanguage: "JavaScript",
    programmingLanguageIcon: <BiLogoJavascript />,
    id: "@fum",
  },
];
