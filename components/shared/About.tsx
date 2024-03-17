import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Heading from "../ui/heading";

const About = () => {
  return (
    <div
      id="about-section"
      className="flex justify-between items-center max-w-5xl w-full px-5 min-h-[100vh]"
    >
      <div className="w-full md:w-1/2">
        <Heading title="About Me" className="text-5xl font-bold mb-7" />
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
