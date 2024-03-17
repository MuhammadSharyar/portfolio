"use client";

import React from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = React.useState(false);

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(formData).some((v) => v === null || v === "")) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill all fields",
      });

      return;
    }

    setLoading(true);

    const res = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then((res) => res.json());

    setLoading(false);

    if (res.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: (
          <div>
            Something went wrong, You can email the developer directly at{" "}
            <Link href="mailto:msharyar064@gmail.com" className="font-bold">
              msharyar064@gmail.com
            </Link>{" "}
            or talk to him at{" "}
            <Link href="tel:+971502448064" className="font-bold">
              +971 502 448 064
            </Link>
          </div>
        ),
      });
    } else {
      toast({
        title: "Success",
        description:
          "Your message has been delivered successfully, The developer will get back to you asap 😇",
      });

      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div
      className="flex justify-between items-center max-w-5xl w-full px-5 min-h-[90vh]"
      id="contact-section"
    >
      <div className="w-full">
        <h2 className="text-4xl font-bold mb-10 text-center">Contact Me</h2>
        <div className="flex justify-center">
          <form
            className="flex flex-col gap-2 justify-center w-[90%] md:w-[50%] lg:w-[40%]"
            onSubmit={sendEmail}
          >
            <input
              name="name"
              placeholder="Your Name"
              className="text-sm border p-2 rounded-md outline-primary bg-transparent"
              onChange={handleInputChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="text-sm border p-2 rounded-md outline-primary bg-transparent"
              onChange={handleInputChange}
            />
            <Textarea
              name="message"
              placeholder="Your Message Here ..."
              rows={7}
              onChange={handleInputChange}
            />
            <Button type="submit" disabled={loading}>
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
