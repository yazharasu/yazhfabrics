"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  RocketLaunchIcon ,
  CheckBadgeIcon,
  InboxIcon,
  ScissorsIcon,
  SunIcon
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";



const FEATURES = [
  {
    icon: RocketLaunchIcon,
    title: "Our Legacy",
    description:
      "For more than three decades, we have built a reputation for excellence in custom tailoring. Our skilled artisans take pride in every stitch, ensuring that each garment we create is a masterpiece of fit and style. From elegant suits to sophisticated dresses, our bespoke services are tailored to perfection, making us the preferred choice for discerning customers.",
  },
  {
    icon: SunIcon,
    title: "Expanding Horizons",
    description:
      "Building on our legacy, we have expanded our offerings to include a retail showroom featuring an exquisite selection of shirting and suiting fabrics. Our collection is curated with the finest materials, including premium worsted wool blends and Italian designs, ensuring that our customers have access to the best fabrics for their wardrobe needs.",
  },
  {
    icon: ScissorsIcon,
    title: "Corporate and School Uniform Solutions",
    description: "Recognizing the need for high-quality uniforms, we specialize in corporate and school uniform fabrics and ready-made uniform solutions. Our uniform fabrics combine durability, comfort, and style, providing the perfect solution for professional and academic settings. Whether you need custom-tailored uniforms or ready-made options, we are dedicated to delivering excellence.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Our Commitment",
    description: "We are committed to upholding the highest standards of quality and customer service. Our experienced team works closely with each client to understand their needs and provide tailored solutions that exceed expectations. From custom tailoring to uniform fabrics, we strive to ensure that every experience with us is exceptional."
  },
];

export function OnlineCourse() {
  return (
    <section className="py-28 px-8" id="About_us">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/uniform_2.jpg"
            className="h-full max-h-[500px] w-full object-cover scale-100"
            alt="online course"
          />
          <Image
            width={768}
            height={500}
            src="/image/tailoring_1.jpg"
            className="h-full max-h-[500px] mt-10 w-full object-cover scale-100"
            alt="online course"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            About Us
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 px-4 text-left text-lg !text-gray-500 lg:px-0"
          >
            Welcome to Yazh Fabrics and Apparels, your premier destination for uniform readymade solutions and uniform fabrics. For over 40 years, we have been the leading tailors in our town, known for our dedication to craftsmanship, quality, and personalized service. Our journey began with a commitment to provide bespoke tailoring services that cater to the unique needs and preferences of each client.    
          </Typography>
          <div className="col-span-2 grid grid-cols-1 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineCourse;
