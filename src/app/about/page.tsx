import SiteLogo from "@/components/SiteLogo";
import React from "react";

function About() {
  return (
    <div className="flex flex-col max-w-screen-lg items-center justify-center px-4 mx-auto min-h-[400px]">
      <SiteLogo />
      <h4 className="text-3xl mt-10">About Us</h4>
      <p>Work in progress</p>
    </div>
  );
}

export default About;
