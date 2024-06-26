"use client";

import Image from "next/image";
import React from "react";
import { Typography, Carousel } from "@material-tailwind/react";


export function CarouselFeatures() {
  return (
    <section id="Contact" className="px-8 pt-40 pb-20">
      <div className="flex mb-16 flex-col items-center">
        <Typography variant="h2" className="text-center mb-2" color="blue-gray">
          Contact Us
        </Typography>
        <Typography
          variant="lead"
          className="mb-3 w-full text-center font-normal !text-gray-500 lg:w-10/12"
        >
          Feel free to reach us!
        </Typography>
      </div>
      <div className="container mx-auto !rounded-lg bg-[url('/image/Background.png')] bg-center py-10 lg:px-16">
        <Carousel
          transition={{ duration: 1 }}
          nextArrow={() => <></>}
          prevArrow={() => <></>}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute left-16 bottom-0 z-50 flex h-5 w-20 -translate-x-2/4 gap-2 md:left-2/4">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 w-10 cursor-pointer transition-all content-[''] ${
                    activeIndex === i ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {new Array(2).fill("").map((_, i) => (
            <div
              key={i}
              className="!relative flex grid-cols-1 flex-col-reverse gap-6 px-10 py-14 md:grid md:grid-cols-5  md:gap-14 md:py-20"
            >
              <div className="col-span-3 flex flex-col items-start justify-center">
                <Typography className="font-normal mb-4 text-base">
                 <b>Phone/WhatsApp:</b> +91 82705 94195
                </Typography>
                <Typography className="font-medium mb-2 text-left">
                  <b>Email:</b> yazhfabricsandsolutions@gmail.com
                </Typography>
                <Typography className="font-medium mb-2 text-left">
                  <b>Address:</b>  28/2, Taj Complex, Bypass Road, 
                  <br></br> Udumalpet-642126, TN.
                </Typography>
              </div>
              <div className="col-span-2 flex justify-center align-middle w-full shrink-0 md:!justify-end">
                <Image
                  width={70}
                  height={70}
                  src="/image/wa.png"
                  alt="image"
                  className="h-20 w-2/4 object-contain md:!w-2/3"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default CarouselFeatures;