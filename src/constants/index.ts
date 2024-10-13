import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  github,
  linkButton,
  figmaButton,
  roddeeCover,
  
  // docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  // threejs,
  generation,
  AAA,
  botCover,
  noteCover,
  
} from "../assets";

import roddeepic from "../assets/profile_pic/roddee.png"
import circle from "../assets/Ellipse 22.png"
// import cart from "../assets/profile_pic/shopping cart.png"
// import crud from "../assets/profile_pic/CRUD.png"

export const navLinks: TNavLink[] = [
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "project",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UX/UI Designer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences: TExperience[] = [
  {
    title: "Student Pilot",
    companyName: "Asia Avia Academy",
    icon: AAA,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - August 2023",
    points: [
      "Successfully completed 210 hours of flight training in both single-engine and multi-engine aircraft, demonstrating proficiency in various flight maneuvers and procedures.",
      "Developed strongskills in navigation and flight planning, including route selection, fuel management, and weather analysis.",
      "Effectively communicated with air traffic control and pilot instructor, adhering to standard aviation communication protocols.",
    ],
  },
  {
    title: "Graphic Desginer",
    companyName: "Freelance",
    icon: circle,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - April 2024",
    points: [
      "Utilized creativity skills to design brand logos and product banners for online shopping stores.",
      "Collaborated effectively with clients to understand their desired outcomes for the project.",
      
  
    ],
  },
  // {
  //   title: "Web Developer",
  //   companyName: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Junior Software Developer (Bootcamp Learner)",
    companyName: "Generation Thailand",
    icon: generation,
    iconBg: "#E6DEDD",
    date: "April 2024 - July 2024",
    points: [
      "Developed skills in building web applications using HTML, CSS, JavaScript, and React for the front end, Node.js and Express for the back end, and MongoDBfor database management.",
      "Developed essential behavioral skills for career-switching, including a growth mindset, effective communication, and teamwork.",
      "Participated in hands-on projects, collaborating with teammates to create fully functional web applications from scratch, and applied Agile and Scrum methodologies for project management.",
      
    ],
  },
];


// const experiences: TExperience[] = [
//   {
//     title: "Student Pilot",
//     companyName: "Asia Avia Academy",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Graphic Desginer",
//     companyName: "Freelance",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   // {
//   //   title: "Web Developer",
//   //   companyName: "Shopify",
//   //   icon: shopify,
//   //   iconBg: "#383E56",
//   //   date: "Jan 2022 - Jan 2023",
//   //   points: [
//   //     "Developing and maintaining web applications using React.js and other related technologies.",
//   //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//   //     "Implementing responsive design and ensuring cross-browser compatibility.",
//   //     "Participating in code reviews and providing constructive feedback to other developers.",
//   //   ],
//   // },
//   {
//     title: "Full stack Developer",
//     companyName: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "RODDEE Second-Hand Car ",
    description:
          "Used the MERN Stack to develop a comprehensive web application for buying and selling second-hand cars.",
      // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "orange-text-gradient",
      },
      
    ],
    image: roddeepic,
    sourceCodeLinks: [
      {
        link: "https://github.com/jsd-genkx/mern-notes-app-frontend/tree/main/notes-app/src",
        icon: github,
      },
      {
        link: "https://front-end-car-ecommerce.vercel.app/",
        icon: linkButton, 
      },
    ],
  },
  {
    name: "RODDEE Second-Hand Car (UI Design)",
    description:
          "A UI design project for a second-hand car sales website application, utilizing a design system to create consistent and user-friendly interfaces.",
          
      // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Design System",
        color: "pink-text-gradient",
      },
      
      
    ],
    image: roddeeCover,
    sourceCodeLinks: [
      {
        link: "https://www.figma.com/design/ZzlG2mjYS61BXoKv4jtxqg/RODDEE-Second-hand-Car-Project?node-id=3016-630&t=TuC4CVd2FIsreSbU-1",
        icon: figmaButton, // ใส่ไอคอนที่คุณต้องการ
      },
    ],
  },
  // {
  //   name: "Note Taking App",
  //   description:
  //         "Used the MERN Stack to created a note-taking application that allows users to easily create, edit, delete, and manage their notes.",
  //     // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //     tags: [
  //       {
  //         name: "React",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "Mongodb",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "Tailwind",
  //         color: "pink-text-gradient",
  //       },
  //       {
  //         name: "Express",
  //         color: "orange-text-gradient",
  //       },
        
  //     ],
  //   image: noteCover,
  //   sourceCodeLinks: [
  //     {
  //       link: "https://github.com/Guitarktp/notes-app-myself",
  //       icon: github, // ใส่ไอคอนที่คุณต้องการ
  //     },
  //     {
  //       link: "https://alwaysnote.vercel.app/",
  //       icon: linkButton, 
  //     },
  //   ],
  // },
  {
    name: "E-commerce Checkout Bot",
    description:
          "A checkout bot using HTTP requests to add items to the cart and Selenium to complete the purchase, built for educational purposes.",
      // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Selenium",
        color: "white-text-gradient",
      },
      {
        name: "Requests Library",
        color: "orange-text-gradient",
      },
      
    ],
    image: botCover,
    sourceCodeLinks: [
      {
        link: "https://github.com/Guitarktp/e-com-checkout-project",
        icon: github, // ใส่ไอคอนที่คุณต้องการ
      },
    ],
  },
  
  
  // {
  //   name: "Shopping Cart Web App",
  //   description:
  //     "Used HTML, CSS, and JavaScript to develop a comprehensive web application for managing a shopping cart, featuring capabilities to add, edit, and delete items, as well as calculate total price. ",
  //   tags: [
  //     {
  //       name: "Javascript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //     // {
  //     //   name: "restapi",
  //     //   color: "green-text-gradient",
  //     // },
  //     // {
  //     //   name: "scss",
  //     //   color: "pink-text-gradient",
  //     // },
  //   ],
  //   image: cart,
  //   sourceCodeLink: "https://github.com/Guitarktp/13-Guitar-js",
  // },
  // {
  //   name: "CRUD Web App",
  //   description:
  //     "Develop a web application for managing employee data, featuring capabilities to add, edit, and delete employee records, as well as manage roles and other relevant information in an admin dashboard.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
      
  //   ],
  //   image: crud,
  //   sourceCodeLink: "https://github.com/Guitarktp/13-Guitar-react",
  //   // sourceCodeLink: "https://13-guitar-js.vercel.app/",
  // },
  // {
  //   name: "Shopping cart Web App",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   sourceCodeLink: "https://13-guitar-js.vercel.app/",
  // },
  // {
  //   name: "CRUD Web App",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   sourceCodeLink: "https://13-guitar-js.vercel.app/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
