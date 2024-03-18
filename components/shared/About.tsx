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
          Innovative and driven Web developer and UI/UX Designer with over 5
          years of experience with a passion for crafting robust and scalable
          solutions. Equipped with a strong foundation in full-stack
          development, I am adept at designing and implementing high-quality
          code across multiple platforms. With a track record of successfully
          delivering projects on time and exceeding client expectations, I am
          now seeking new opportunities to leverage my skills and contribute to
          cutting-edge technological advancements.
        </p>
        <Link
          href="https://drive.usercontent.google.com/u/0/uc?id=1Zazpf45ni8g8AFUrGVGx1jOkTZp268Sp&export=download"
          download
        >
          <Button>Download CV</Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
