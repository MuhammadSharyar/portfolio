"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center max-w-5xl w-full px-5 min-h-[90vh]"
      id="hero-section"
    >
      <div className="w-full md:w-1/2 pt-10 pb-5">
        <h2 className="text-3xl font-semibold mb-2">Hello I'm</h2>
        <TypeAnimation
          sequence={["Developer", 1500, "Designer", 1500]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "3em",
            display: "inline-block",
            fontWeight: "bolder",
            color: "#884dee",
          }}
          repeat={Infinity}
        />
        <p className="text-sm mb-5">
          My name is Muhammad Sharyar, I'm a web developer with over 5 years of
          experience.
        </p>
        <Link href="#contact-section">
          <Button>Contact Me</Button>
        </Link>
      </div>
      <div>
        <Image
          src={"/assets/images/profile-img.png"}
          alt="profile image"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Hero;
