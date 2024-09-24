type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Kittipong Portfolio",
    fullName: "Kittipong Satayanusakkul",
    email: "Kittipong.sataya@gmail.com",
  },
  hero: {
    name: "Kittipong Satayanusakkul ",
    p: ["I'm a career switcher with a background in Aeronautical Engineering, driven by a passion for technology, problem-solving, and continuous learning. Skilled in coding, I'm ready to embrace new challenges and develop innovative software solutions. "],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `An engineer with a passion for the technology field and a recent graduate of the Generation Junior Software Developer Bootcamp, I am seeking an opportunity for an entry-level Front-End Developer position. During the Bootcamp, I gained knowledge in Front-end development, including HTML, CSS, JavaScript, React, and responsive design. Additionally, I possess a UX/UI mindset that enhances my creative abilities, analytical thinking, and attention to detail. `,
      // content: `I'm a skilled software developer with experience in 
      // JavaScript, and expertise in frameworks like React, Node.js. 
      // I'm a quick learner and collaborate closely with clients to
      // create efficient, scalable, and user-friendly solutions that solve
      // real-world problems. Let's work together to bring your ideas to life!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Experience.",
    },
    feedbacks: {
      p: "",
      h2: "Education.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
