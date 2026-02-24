import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ML Engineer",
    icon: mobile,
  },
  {
    title: "Computer architect",
    icon: backend,
  },
  {
    title: "Ethical hacker",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "DJango",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQLite",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Python",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Computer Engineer Undergraduate",
    company_name: "University of Peradeniya",
    icon: starbucks,
    iconBg: "#000000",
    date: "April 2024 - Present",
    points: [
      "I am an undergraduate student in Computer Engineering at the University of Peradeniya.",
      "My studies focus on both hardware and software aspects of computing.",
      "I have a strong interest in modern technologies and problem-solving.",
      "I am passionate about applying engineering principles to real-world challenges and continuously expanding my technical skills."
    ]
  },
  {
    title: "Self Employed Web Developer",
    company_name: "KNS",
    icon: tesla,
    iconBg: "#000000",
    date: "Jan 2021 - Present",
    points: [
      "I worked independently as a web developer, specializing in both frontend and backend development.",
      "I designed and built user‑friendly websites and applications tailored to client needs.",
      "My focus was on delivering efficient and scalable digital solutions.",
      "This role helped me strengthen my technical expertise and professional approach."
    ]
  },
  {
    title: "Trainee",
    company_name: "Arceion",
    icon: shopify,
    iconBg: "#000000",
    date: "Jan 2026 - Present",
    points: [
      "I am working as a trainee at Arceion as a web developer.",
      "My primary tech stack includes Django, PyQt, and JavaScript.",
      "I contribute to building and maintaining web applications using these technologies.",
      "Collaborating with the team to deliver efficient and scalable solutions."
    ]
  }
];

export default experiences;

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "S.M.S",
    description:
      "The Student Management System (SMS) is a web-based application designed to streamline and automate the management of student information within an educational institution. It provides administrators, teachers, and students with a centralized platform to handle academic and administrative tasks efficiently this is a training project.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/KNSooriya/SMS.git",
  },
  {
    name: "AI assistant",
    description:
      "An AI-powered assistant application that helps users with tasks like answering questions, generating content, and providing recommendations and guided error resolution. The assistant is built using Python and leverages the Mistral 7B Instruct model, which is a powerful language model designed for natural langauge understatnding and generation.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "mistral",
        color: "green-text-gradient",
      },
      {
        name: "ollama",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/KNSooriya/AI-Assistant.git",
  },
  {
    name: "3D Portfolio",
    description:
      "A comprehensive 3D portfolio website built with React and Three.js, showcasing projects and skills in an immersive environment.   The portfolio features interactive 3D models, dynamic animations, and a visually stunning design to create an engaging user experience. It serves as a platform to demonstrate creativity and expertise in 3D web development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-three-fiber",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
