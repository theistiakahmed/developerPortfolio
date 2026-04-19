import React from "react";
import LiquidEther from "../ui/LiquidEther";
import Container from "../common/Container";
import Animation from "../common/Animation";
import { LuDownload } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutgoingMail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 md:pt-46 lg:pt-56 pb-12">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B497CF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={true}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      
      <div className="relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12" >

            
            <div className="text-center lg:text-left order-2 lg:order-1"  >
              <h1 data-aos="fade-down-right" className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                Hi, <span className="text-fuchsia-600">I am</span>
              </h1>

              <h1 data-aos="zoom-in" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mt-2">
                Istiak Ahmed
              </h1>

              <div className="mt-4 flex justify-center lg:justify-start">
                <Animation />
              </div>

              <p data-aos="zoom-out" className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg text-[#757575] pt-6 pb-8 leading-7">
                I build modern, scalable, and high-performance web applications
                using <span className="text-fuchsia-600">Next.js</span>, with a strong focus on clean architecture,
                maintainable code, and exceptional user experience. I enjoy
                creating fast, responsive, and SEO-friendly products that
                deliver real value to users.
              </p>

              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <div data-aos="fade-right" className="w-1/2 sm:w-auto flex items-center justify-center gap-x-2 px-6 py-4 bg-fuchsia-600 hover:text-fuchsia-600 text-base md:text-lg font-bold rounded-2xl hover:bg-transparent hover:border hover:border-fuchsia-600 hover:scale-105 shadow-[0_0_20px_rgba(217,70,239,0.5)] hover:shadow-[0_0_35px_rgba(217,70,239,0.7)] duration-300">
                  <LuDownload />
                  <Link to="/">Download Resume</Link>
                </div>

                <div data-aos="fade-left" className="w-1/2 sm:w-auto flex items-center justify-center gap-x-2 px-6 py-4 bg-fuchsia-600 hover:text-fuchsia-600 text-base md:text-lg font-bold rounded-2xl hover:bg-transparent hover:border hover:border-fuchsia-600 hover:scale-105 shadow-[0_0_20px_rgba(217,70,239,0.5)] hover:shadow-[0_0_35px_rgba(217,70,239,0.7)] duration-300">
                  <FaGithub />
                  <Link to="https://github.com/istiakdev">
                    GitHub
                  </Link>
                </div>
              </div>
              <div className="pt-10 flex items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
  <a href="" target="_blank"
  rel="noopener noreferrer">
    <div data-aos="fade-up-right" className="text-[22px] sm:text-[26px] md:text-[30px] p-2 sm:p-3 hover:bg-fuchsia-100 hover:text-fuchsia-600 hover:scale-125 duration-300 inline-block hover:shadow-[0_0_35px_rgba(217,70,239,0.7)] rounded-2xl">
      <FaLinkedin />
    </div>
  </a>

 <a href="https://x.com/istiakahmed346" target="_blank"
  rel="noopener noreferrer">
  <div data-aos="zoom-in" className="text-[22px] sm:text-[26px] md:text-[30px] p-2 sm:p-3 hover:bg-fuchsia-100 hover:text-fuchsia-600 hover:scale-125 duration-300 inline-block hover:shadow-[0_0_35px_rgba(217,70,239,0.7)] rounded-2xl">
      <FaXTwitter />
    </div>
 </a>
 <a href="" target="_blank"
  rel="noopener noreferrer">
  <div  data-aos="fade-up-left" className="text-[22px] sm:text-[26px] md:text-[30px] p-2 sm:p-3 hover:bg-fuchsia-100 hover:text-fuchsia-600 hover:scale-125 duration-300 inline-block hover:shadow-[0_0_35px_rgba(217,70,239,0.7)] rounded-2xl">
      <MdOutgoingMail />
    </div>
 </a>
</div>
            </div>

            
            <div data-aos="zoom-in"className="flex justify-center order-1 lg:order-2 bannerImg">
              <img 
                className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] object-cover border-4 border-fuchsia-600  shadow-[0_0_20px_rgba(217,70,239,0.5)] hover:shadow-[0_0_35px_rgba(217,70,239,0.7)] rounded-full"
                src="/src/assets/Istiak.png"
                alt="Istiak.png"
              />
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
};

export default Banner;