import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  projectEight,
  projectNine,
  projectTen,
  projectEleven,
  projectTwelve,
  projectTthirteen,
  projectTfourteen,
  projectTfifteen,
} from "../../assets/index";

import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          link="https://movieapp-self.vercel.app/"
          title="Movie App"
          des="Movix a dynamic movie website built with React, Redux, and the TMBD API. Experience seamless browsing of movie data, featuring a user-friendly interface and advanced search functionalities. Explore the world of cinema with Movix and discover your next favorite film.!"
          src={projectOne}
        />
        <ProjectsCard
          link="https://gptprofessor.io/"
          title="frontend"
          des="Discover our frontend projects, each showcasing modern web development skills. From dynamic React apps to stunning UI clones of platforms like Facebook and YouTube, these projects highlight expertise in HTML, CSS, JavaScript, and more. Experience intuitive, responsive, and visually appealing user interfaces that bring ideas to life."
          src={projectTthirteen}
        />
        <ProjectsCard
          title="frontend"
          github="https://github.com/BasitShahan/intell-ai-scientist"
     
          des="Discover our frontend projects, each showcasing modern web development skills. From dynamic React apps to stunning UI clones of platforms like Facebook and YouTube, these projects highlight expertise in HTML, CSS, JavaScript, and more. Experience intuitive, responsive, and visually appealing user interfaces that bring ideas to life.          "
          src={projectTfourteen}
        />
        <ProjectsCard
          title="frontend"
          link="https://intelliwriter.io/"
           github="https://github.com/BasitShahan/intelli-writer-ai"
          des="Discover our frontend projects, each showcasing modern web development skills. From dynamic React apps to stunning UI clones of platforms like Facebook and YouTube, these projects highlight expertise in HTML, CSS, JavaScript, and more. Experience intuitive, responsive, and visually appealing user interfaces that bring ideas to life. "
          src={projectTfifteen}
        />
        <ProjectsCard
          title="Watch App"
          link="https://superb-narwhal-ae9f67.netlify.app/"
          github=""
          des="Immerse yourself in the world of horology with our Watch App website, expertly crafted using HTML, CSS, and Bootstrap. This platform offers a sleek, visually stunning interface for exploring the latest timepieces. With responsive design and seamless navigation, watch enthusiasts and collectors can enjoy an exceptional browsing experience, discovering horological masterpieces effortlessly. "
          src={projectSix}
        />
        <ProjectsCard
          link="https://melodious-macaron-0cadbe.netlify.app/"
         
          title="Watch App"
          des="Watch Website, meticulously crafted with HTML, CSS, and Bootstrap. Immerse yourself in a visually stunning and user-friendly interface as you explore the latest timepieces and horological wonders. With its responsive design and seamless navigation, the Watch Website provides an exceptional browsing experience for enthusiasts and collectors alike. Uncover the artistry of watchmaking through this captivating website"
          src={projectTwo}
        />
        <ProjectsCard
          title="Crud With Filteration"
          github="https://github.com/BasitShahan/redux_crud"
          des="MERN CRUD app, where all your data management needs are seamlessly addressed. Built with MongoDB, Express.js, React, and Node.js, this app enables you to effortlessly perform Create, Read, Update, and Delete operations. Explore the convenience of managing your data with ease and efficiency, making it an essential tool for your application development journey"
          src={projectEight}
        />
        <ProjectsCard
          title="Tic Tac Toe"
          github="https://github.com/BasitShahan/Tic_Toc_Toe"
          des="Tic Tac Toe, meticulously crafted with HTML, CSS, and Bootstrap. Immerse yourself in a visually stunning and user-friendly interface as you explore the latest timepieces and horological wonders. With its responsive design and seamless navigation, the Watch Website provides an exceptional browsing experience for enthusiasts and collectors alike. Uncover the artistry of watchmaking through this captivating website"
          src={projectNine}
        />
        <ProjectsCard
          title="Quiz App"
          github="https://github.com/BasitShahan/Quiz_App"
          des="Quiz App, meticulously crafted with HTML, CSS, and Bootstrap. Immerse yourself in a visually stunning and user-friendly interface as you explore the latest timepieces and horological wonders. With its responsive design and seamless navigation, the Watch Website provides an exceptional browsing experience for enthusiasts and collectors alike. Uncover the artistry of watchmaking through this captivating website"
          src={projectTen}
        />
        
      </div>
    </section>
  );
};

export default Projects;
