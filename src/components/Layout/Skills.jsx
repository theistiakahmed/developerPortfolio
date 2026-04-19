import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import GlowImageCard from "../common/GlowImageCard";

const Skills = () => {
  return (
    <>
      <article className="shadow-2xl pb-[100px]"> 
        <Container>
          <div className="text-center pt-[80px] sm:pt-[100px] md:pt-[100px] px-4">
            <h3 className="inline-block relative font-extrabold text-[32px] sm:text-[40px] md:text-[48px]">
              My{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Skills
              </span>
               <span className="absolute right-0 -bottom-0 w-1/2 h-[5px] rounded-full bg-black dark:bg-white origin-left animate-[borderGrow_1s_ease-out_forwards]"></span>
            </h3>

            <p className="text-sm text-gray-500 sm:text-base md:text-lg max-w-[700px] mx-auto pt-3 md:pb-8 leading-7">
              <span className="block">
                I specialize in the modern web ecosystem, focusing on performance,
              </span>
              <span className="block">
                scalability, and clean code.
              </span>
            </p>
          </div>
          <Flex className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5 pt-10  sm:px-4 place-items-center justify-between"}>
            <GlowImageCard
              image={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              }
              title={"JavaScript"}
              des={"ADVANCED"}
            />
            <GlowImageCard
              image={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              }
              title={"React.js"}
              des={"ADVANCED"}
            />
            <GlowImageCard
              image={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              }
              title={"Next.js"}
              des={"INTERMEDIATE"}
            />
            <GlowImageCard
              image={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              }
              title={"TypeScript"}
              des={"INTERMEDIATE"}
            />
            <GlowImageCard
              image={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              }
              title={"Tailwindcss"}
              des={"ADVANCED"}
            />
            <GlowImageCard
              image={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
              }
              title={"Bootstrap"}
              des={"ADVANCED"}
            />
            <GlowImageCard
              image={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
              }
              title={"Redux"}
              des={"INTERMEDIATE"}
            />
            <GlowImageCard
              image={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
              }
              title={"Figma"}
              des={"ADVANCED"}
            />
            <GlowImageCard
              image={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg"
              }
              title={"NPM"}
              des={"ADVANCED"}
            />
            <GlowImageCard
              image={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              }
              title={"HTML 5"}
              des={"ADVANCED"}
            />
            <GlowImageCard
              image={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              }
              title={"Git"}
              des={"ADVANCED"}
            />
            <GlowImageCard
              image={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              }
              title={"GitHub"}
              des={"ADVANCED"}
            />
          </Flex>
        </Container>
      </article>
    </>
  );
};

export default Skills;
