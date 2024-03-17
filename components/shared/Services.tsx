import React from "react";
import { FaCode, FaWordpressSimple } from "react-icons/fa6";
import { CiServer } from "react-icons/ci";
import { BiBrush } from "react-icons/bi";
import Heading from "../ui/heading";

const Services = () => {
  return (
    <div
      id="services-section"
      className="flex justify-between items-center max-w-5xl w-full px-5 min-h-[90vh]"
    >
      <div className="w-full">
        <Heading
          title="Services"
          className="text-4xl font-bold mb-10 text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ServiceCard
            icon={<FaCode size={40} className="text-primary" />}
            text="Web Development"
          />
          <ServiceCard
            icon={<CiServer size={40} className="text-primary" />}
            text="Backend Development"
          />
          <ServiceCard
            icon={<BiBrush size={40} className="text-primary" />}
            text="UI/UX Design"
          />

          <ServiceCard
            icon={<FaWordpressSimple size={40} className="text-primary" />}
            text="Wordpress Developer"
          />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, text }: { icon: any; text: string }) => {
  return (
    <div className="flex flex-col items-center gap-3 py-5 border-2 rounded-md shadow-sm">
      {icon}
      {text}
    </div>
  );
};

export default Services;
