import {
  javascript,
  c,
  html,
  css,
  cpp,
  reactjs,
  sql,
  postman,
  nodejs,
  postgresql,
  git,
  docker,
  walmart,
  amazon,
  IMDB,
  python,
  portfoliopic,
  audionyxpic,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  
];

const experiences = [
  {
    title: "FC Associate",
    company_name: "Amazon FC",
    icon: amazon,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - July 2024",
    points: [
      "Facilitated efficient transfer of goods into inventory pods within an automated environment.",
      "Resolved system errors related to robotics pods, ensuring smooth operation.",
      "Served as a system support associate, handling specialized tasks for inventory reconciliation."
    ],
  },
  {
    title: "Team Associate",
    company_name: "Walmart",
    icon: walmart,
    iconBg: "#383E56",
    date: "Aug 2021 - Dec 2023",
    points: [
      "Operated specialized equipment to safely and efficiently unload cargo from trucks.",
      "Managed specialized inventory, updating quantities and locations using scanning software.",
      "Sorted and processed merchandise, maintaining organized inventory control.",
      "Provided customer support, assisting with product inquiries and efficient item location."
    ],
  }
];


const projects = [
  {
    name: "Audionyx",
    description:
      "An immersive 3D audio visualizer that dynamically generates real-time visualizations by processing audio from user-selected media links, or locally uploaded files.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "black-text-gradient",
      },
      {
        name: "WebAudio API",
        color: "orange-text-gradient",
      }
    ],
    image: audionyxpic,
    source_code_link: "https://github.com/Alyssa-Webb/Audionyx",
  },
  {
    name: "IMDB Movie Database",
    description:
      "A C++ movie database utilizing hash tables and skip lists for efficient storage, search, and management of movie data, with a user-friendly interface for seamless interaction.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Hash Tables",
        color: "green-text-gradient",
      },
      {
        name: "Skip Lists",
        color: "pink-text-gradient",
      },
      {
        name: "CSV",
        color: "black-text-gradient",
      },
      {
        name: "Text-Based UI",
        color: "orange-text-gradient",
      }
    ],
    image: IMDB,
    source_code_link: "https://github.com/Abhi6310/IMDB-Movie-Database",
  },
  {
    name: "Personal Portfolio Website",
    description:
      "A clean, responsive portfolio website showcasing projects, skills, and experience with fast performance and modern design.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
      {
        name: "EmailJS",
        color: "black-text-gradient",
      }
    ],
    image: portfoliopic,
    source_code_link: "https://abhinavchalise.com/",
  },
];

export {technologies,experiences,projects};