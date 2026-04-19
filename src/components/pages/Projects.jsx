import img1 from "/src/assets/gaming.png";
import img2 from "/src/assets/playGame.png";
import img3 from "/src/assets/ecom.png";
import img4 from "/src/assets/Degin.png";
import img5 from "/src/assets/Bkash.png";
import img6 from "/src/assets/digital.png";
import ProjectCard from "../common/ProjectCard";
import Flex from "../common/Flex";
import Container from "../common/Container";

const Projects = () => {
  return (
    <article className="shadow-2xl py-[80px] md:py-[130px]">
      <Container>
        <div className="pb-12 md:pb-20 text-center">
          <h3 className="inline-block relative font-extrabold text-[28px] sm:text-[40px] md:text-[48px]">
            My All{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
            <span className="absolute right-0 bottom-0 w-1/2 h-[4px] md:h-[5px] rounded-full bg-black dark:bg-white origin-left animate-[borderGrow_1s_ease-out_forwards]"></span>
          </h3>
        </div>

        <Flex
          className={
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center"
          }
        >
          <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-fuchsia-600 shadow-fuchsia-600/40 hover:shadow-fuchsia-600/70 hover:scale-105 transition-all duration-300">
            <ProjectCard
              img={img1}
              title="Life Time Gaming Experience"
              desc="A Gaming Base platform Built With TailwindCss"
              liveLink="https://istiakdev.github.io/Responsive_Portfolio/"
              githubLink="https://github.com/istiakdev/Responsive_Portfolio"
            />
          </div>

          <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-fuchsia-600 shadow-fuchsia-600/40 hover:shadow-fuchsia-600/70 hover:scale-105 transition-all duration-300">
            <ProjectCard
              img={img2}
              title="Play Game For Fun"
              desc="A Simple Gaming Site Built With Js"
              liveLink="https://istiakdev.github.io/FunGameWithJs/"
              githubLink="https://github.com/istiakdev/FunGameWithJs"
            />
          </div>

          <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-fuchsia-600 shadow-fuchsia-600/40 hover:shadow-fuchsia-600/70 hover:scale-105 transition-all duration-300">
            <ProjectCard
              img={img3}
              title="E-commerce Platform"
              desc="An E-commerce Platform Built with React.js & Redux"
              liveLink="https://orbi-e-com.vercel.app/"
              githubLink="https://github.com/istiakdev/Responsive_Portfolio"
            />
          </div>

          <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-fuchsia-600 shadow-fuchsia-600/40 hover:shadow-fuchsia-600/70 hover:scale-105 transition-all duration-300">
            <ProjectCard
              img={img4}
              title="Design Agency Site"
              desc="A Design Base platform built with Bootstrap & AOS Js"
              liveLink="https://istiakdev.github.io/Bootstrap-project/"
              githubLink="https://github.com/istiakdev/Bootstrap-project"
            />
          </div>

          <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-fuchsia-600 shadow-fuchsia-600/40 hover:shadow-fuchsia-600/70 hover:scale-105 transition-all duration-300">
            <ProjectCard
              img={img5}
              title="Demo Wallet App"
              desc="A Simple Wallet App Built with Daisyui & Js"
              liveLink="https://istiakdev.github.io/Bootstrap-project/"
              githubLink="https://github.com/istiakdev/Bootstrap-project"
            />
          </div>

          <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-fuchsia-600 shadow-fuchsia-600/40 hover:shadow-fuchsia-600/70 hover:scale-105 transition-all duration-300">
            <ProjectCard
              img={img6}
              title="Digital Marketing Agency"
              desc="Digital Marketing Agency Platform Built With React.js"
              liveLink="https://react-routing-topaz-eight.vercel.app/"
              githubLink="https://github.com/istiakdev/DemoSimpleBkash"
            />
          </div>
        </Flex>
      </Container>
    </article>
  );
};

export default Projects;