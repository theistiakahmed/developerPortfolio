import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import TechnicalProwes from "../common/TechnicalProwes";
import Flex from "../common/Flex";

const About = () => {
  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjects((p) => (p < 30 ? p + 1 : 30));
      setExperience((e) => (e < 2 ? e + 1 : 2));
      setClients((c) => (c < 100 ? c + 2 : 100));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const Card = ({ value, label, color,className }) => (
    <div
      className={`relative w-1/2 md:w-full m-auto px-6 py-6 rounded-2xl text-center shadow-xl
      bg-white dark:bg-[#111]
      border border-gray-200 dark:border-gray-700
      transition-all duration-300 hover:scale-105
      hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]`}
    >
      <h2 className={`text-3xl font-bold ${color}`}>{value}</h2>
      <p className="text-xs tracking-widest text-gray-600 dark:text-gray-300 mt-2">
        {label}
      </p>
    </div>
  );

  return (
    <div className="shadow-xl pb-[80px]">
      <Container>
        <div className="text-center pt-[110px] md:pt-[130px]">
          <h2 className="inline-block relative font-extrabold text-[48px]">
            About{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
            
            <span className="absolute left-0 -bottom-0 w-1/2 h-[5px] rounded-full bg-black dark:bg-white origin-left animate-[borderGrow_1s_ease-out_forwards]"></span>
          </h2>

          <div className="pt-[30px] flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/2">
              <h3 className="text-[#757575] text-[18px] font-normal text-center md:text-start p-4 lg:p-8">
                Hi, I'm a passionate{" "}
                <span className="text-black dark:text-white font-bold text-[20px] border-b-2 border-gray-500 ">
                  Frontend Developer
                </span>{" "}
                specializing in <span className="text-cyan-400">React.js</span>{" "}
                and <span className="text-fuchsia-600">Next.js</span>, focused
                on building modern, responsive, and high-performance web
                applications.
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <Card 
                  value={`${projects}+`}
                  label="PROJECTS DONE"
                  color="text-blue-600"
                  
                  
                />
                <Card
                  value={`${experience}+ Years`}
                  label="EXPERIENCE"
                  color="text-green-600"
                />
                <Card
                  value={`${clients}+`}
                  label="HAPPY CLIENTS"
                  color="text-purple-600"
                />
              </div>

              <h3 className="text-xl font-bold tracking-widest text-gray-600 dark:text-gray-300 mb-3 pt-10">
                TECHNICAL PROWESS
              </h3>

              <Flex className="flex-wrap gap-3 gap-y-6 justify-center">
                <TechnicalProwes TechnicalText={"HTML5"} />
                <TechnicalProwes TechnicalText={"JavaScript (ES6+)"} />
                <TechnicalProwes TechnicalText={"React.js"} />
                <TechnicalProwes TechnicalText={"Hooks"} />
                <TechnicalProwes TechnicalText={"Next.js"} />
                <TechnicalProwes TechnicalText={"Tailwind CSS"} />
                <TechnicalProwes TechnicalText={"Shadcn"} />
                <TechnicalProwes TechnicalText={"Bootstrap"} />
                <TechnicalProwes TechnicalText={"Context API"} />
                <TechnicalProwes TechnicalText={"Redux Toolkit"} />
                <TechnicalProwes TechnicalText={"Git & GitHub"} />
                
                
                
              </Flex>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-1/2">

  <div data-aos="fade-down" className="mt-6 lg:mt-10 p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md bg-white dark:bg-[#111]
  hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300">

    <ul className="space-y-2 sm:space-y-3 text-[14px] sm:text-[16px] text-gray-700 dark:text-gray-300">

      {[
        "Build responsive and modern websites for all devices",
        "Create fast and scalable React.js / Next.js applications",
        "Develop clean, interactive, and user-friendly UI/UX",
        "Convert Figma / PSD designs into pixel-perfect websites",
        "Optimize website speed, SEO, and performance",
        "Build reusable components and clean code architecture",
        "Integrate REST APIs and dynamic data systems",
        "Create animations and smooth interactions",
        "Develop eCommerce, Dashboard, Portfolio, Landing Pages",
        "Deploy websites on Vercel, Netlify, and cloud platforms",
      ].map((item, i) => (
        <li key={i} className="flex gap-2 items-start leading-relaxed">

          <span className="text-fuchsia-600 mt-[2px]">✔</span>

          <span className="text-[14px] sm:text-[16px]">
            {item}
          </span>

        </li>
      ))}

    </ul>

  </div>

</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
