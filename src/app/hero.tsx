"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div id="Hero" className="relative min-h-screen w-full bg-[url('/image/uniform_group.jpg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography
          variant="h1"
          color="white"
          className="md:max-w-full lg:max-w-3xl"
        >
          Corporate and School Uniform Fabric Supplier and Stitching Solutions Provider
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
        >
          With over 40 years of experience in custom tailoring, we offer a curated collection of premium shirting and suiting fabrics. 
          Our expertise extends to corporate and school uniform fabrics and ready-made uniform solutions, providing tailored solutions that combine quality, comfort, and style. 
        </Typography>
        <div>
          <Button variant="gradient" color="white">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;
