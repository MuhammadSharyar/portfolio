import React from "react";
import {
  BiLogoReact,
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoMongodb,
  BiLogoFirebase,
} from "react-icons/bi";
import {
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiFigma,
  SiAdobexd,
  SiDocker,
  SiAmazonaws,
  SiTailwindcss,
} from "react-icons/si";
import Heading from "../ui/heading";

const Skills = () => {
  return (
    <div
      id="skills-section"
      className="flex justify-between items-center max-w-5xl w-full px-5 min-h-[100vh]"
    >
      <div className="w-full">
        <Heading
          title="Skills"
          className="text-4xl font-bold mb-10 text-center"
        />
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <h3 className="text-2xl font-bold mb-7">Frontend</h3>
          <div className="flex justify-center md:justify-start flex-wrap gap-5">
            <SkillCard
              skillIcon={<BiLogoReact size={50} className="text-blue-500" />}
              text="React Js"
            />
            <SkillCard
              skillIcon={
                <BiLogoTypescript size={50} className="text-blue-600" />
              }
              text="Typescript"
            />
            <SkillCard
              skillIcon={
                <BiLogoJavascript
                  size={50}
                  className="text-yellow-500 rounded-full"
                />
              }
              text="Javascript"
            />
            <SkillCard
              skillIcon={
                <SiNextdotjs size={50} className="text-gray-800 rounded-full" />
              }
              text="Next Js"
            />
            <SkillCard
              skillIcon={
                <BiLogoCss3 size={50} className="text-blue-600 rounded-full" />
              }
              text="CSS"
            />
            <SkillCard
              skillIcon={
                <SiTailwindcss
                  size={50}
                  className="text-blue-600 rounded-full"
                />
              }
              text="Tailwind"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <h3 className="text-2xl font-bold mb-7">Backend</h3>
          <div className="flex justify-center md:justify-start flex-wrap gap-5">
            <SkillCard
              skillIcon={<BiLogoNodejs size={50} className="text-green-500" />}
              text="Node JS"
            />
            <SkillCard
              skillIcon={<SiExpress size={50} className="text-gray-500" />}
              text="Express JS"
            />
            <SkillCard
              skillIcon={
                <BiLogoTypescript size={50} className="text-blue-600" />
              }
              text="Typescript"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <h3 className="text-2xl font-bold mb-7">Database</h3>
          <div className="flex justify-center md:justify-start flex-wrap gap-5">
            <SkillCard
              skillIcon={<SiMysql size={50} className="text-blue-500" />}
              text="MySQL"
            />
            <SkillCard
              skillIcon={
                <BiLogoPostgresql size={50} className="text-blue-500" />
              }
              text="PostgreSQL"
            />
            <SkillCard
              skillIcon={<BiLogoMongodb size={50} className="text-green-500" />}
              text="MongoDB"
            />
            <SkillCard
              skillIcon={
                <BiLogoFirebase size={50} className="text-orange-500" />
              }
              text="Firebase"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <h3 className="text-2xl font-bold mb-7">UI / UX</h3>
          <div className="flex justify-center md:justify-start flex-wrap gap-5">
            <SkillCard
              skillIcon={<SiFigma size={50} className="text-blue-500" />}
              text="Figma"
            />
            <SkillCard
              skillIcon={<SiAdobexd size={50} className="text-pink-500" />}
              text="Adobe XD"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <h3 className="text-2xl font-bold mb-7">DevOps</h3>
          <div className="flex justify-center md:justify-start flex-wrap gap-5">
            <SkillCard
              skillIcon={<SiDocker size={50} className="text-blue-600" />}
              text="Docker"
            />
            <SkillCard
              skillIcon={<SiAmazonaws size={50} className="text-orange-500" />}
              text="AWS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ skillIcon, text }: { skillIcon: any; text: string }) => {
  return (
    <div className="flex flex-col justify-center items-center w-fit">
      {skillIcon}
      <p>{text}</p>
    </div>
  );
};

export default Skills;
