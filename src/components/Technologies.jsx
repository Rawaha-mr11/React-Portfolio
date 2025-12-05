import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs } from "@fortawesome/free-brands-svg-icons";
import { SiTailwindcss, SiHtml5 } from "react-icons/si";
import materialUi from "src/assets/images/materialUi.png";
import msWord from "src/assets/images/msWord.png";
import msExcel from "src/assets/images/msExcel.png";

const Technologies = () => {
  const myTechnologies = [
    {
      techIcon: () => (
        <SiHtml5
          color="#E34F26"
          className="w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
        />
      ),
      techTitle: "HTML",
      Purpose: "Front End",
    },
    {
      techIcon: () => (
        <SiTailwindcss
          color="#38BDF8"
          className="w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
        />
      ),
      techTitle: "Tailwind",
      Purpose: "Front End",
    },
    {
      techIcon: () => (
        <FontAwesomeIcon
          icon={faJs}
          className="w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
          color="#F7DF1E"
        />
      ),
      techTitle: "JavaScript",
      Purpose: "Front End",
    },
    {
      techIcon: () => (
        <FontAwesomeIcon
          icon={faReact}
          className="w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
          color="#61DAFB"
        />
      ),
      techTitle: "React",
      Purpose: "Front End",
    },
    {
      techIcon: () => (
        <img
          src={materialUi}
          alt="Material UI"
          className="w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain"
        />
      ),
      techTitle: "Material UI",
      Purpose: "Front End",
    },

    {
      techIcon: () => (
        <img
          src={msExcel}
          alt="Ms Excel"
          className="w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain"
        />
      ),
      techTitle: "MS Excel",
      Purpose: "Data Entry",
    },

    {
      techIcon: () => (
        <img
          src={msWord}
          alt="Ms Word"
          className="w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain"
        />
      ),
      techTitle: "MS WORD",
      Purpose: "Data Entry",
    },
  ];

  return (
    <section id="Tech" className="w-full p-2 sm:p-4">
      <div className="w-full p-2 mt-16 sm:p-4 flex flex-col justify-center items-center">
        <p className="text-text-secondary uppercase text-sm sm:text-base">
          Technologies
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center mt-2 sm:mt-4">
          What Technologies I use
        </h1>
      </div>

      <div className="w-full mt-10 mb-16 flex flex-wrap items-center justify-center gap-7">
        {myTechnologies.map((Technology, index) => (
          <div
            key={index}
            className="w-44 h-60 bg-card-bg p-6 rounded-full flex flex-col justify-center items-center gap-4 shadow-soft transition-border duration-300 border-[1.2px] border-transparent hover:border-text-primary hover:cursor-text"
          >
            <div>{Technology.techIcon()}</div>
            <h1 className="text-text-primary text-xl mt-4 font-bold">
              {Technology.techTitle}
            </h1>
            <p>{Technology.Purpose}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
