import Image from "next/image";
import Link from "next/link";
import React from "react";
import Heading from "../ui/heading";

const Portfolio = () => {
  return (
    <div
      id="portfolio-section"
      className="flex justify-between items-center max-w-5xl w-full px-5 min-h-[90vh] mt-20 md:mt-0"
    >
      <div className="w-full">
        <Heading
          title="Portfolio"
          className="text-4xl font-bold mb-10 text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ProjectCard
            image="/assets/images/photo-edit-ai-img.jpg"
            link="https://photo-edit-ai.vercel.app/"
          />
          <ProjectCard
            image="/assets/images/agent-ai-img.jpg"
            link="https://www.agentaiapp.com/"
          />
          <ProjectCard
            image="/assets/images/chat-gpt-img.jpg"
            link="https://chat-gpt-clone-lovat-one.vercel.app"
          />
          <ProjectCard
            image="/assets/images/resume-insight-img.jpg"
            link="https://github.com/MuhammadSharyar/resume-insight"
          />
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ image, link }: { image: string; link: string }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="border-2 rounded-md shadow-md flex justify-center transition-all hover:scale-105 active:scale-100"
    >
      <Image
        src={image}
        alt=""
        width={400}
        height={400}
        className="rounded-md"
      />
    </Link>
  );
};

export default Portfolio;
