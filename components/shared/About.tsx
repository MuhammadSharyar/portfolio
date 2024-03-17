import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const About = () => {
  return (
    <div
      className="flex justify-between items-center max-w-5xl w-full px-5 min-h-[100vh]"
      id="about-section"
    >
      <div className="w-full md:w-1/2">
        <h2 className="text-5xl font-bold mb-7">About Me</h2>
        <p className="text-sm mb-4">
          As a Full Stack Developer, I have worked on a variety of web
          development projects, demonstrating proficiency in both front-end and
          back-end technologies. I applied problem-solving skills to address
          complex issues efficiently and collaborated with team members to
          provide valuable insights and support.
        </p>
        <Link
          href="https://drive.usercontent.google.com/u/0/uc?id=1a2ADKt0aKqpRKSzst8KOgSY2xKA-zhwq&export=download"
          download
        >
          <Button>Download CV</Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
