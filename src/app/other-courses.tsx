"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const OTHER_COURSES = [
  {
    img: "/image/fabric_1.jpg",
    img_2: "/image/fabric_3.webp",
    title: "Supplying Corporate, Industrial, and School Uniform Fabrics",
    desc: "We provide an extensive selection of high-quality fabrics designed specifically for corporate, industrial, and school uniforms. Our fabrics are chosen for their durability, comfort, and professional appearance, ensuring that your uniforms not only look great but also stand the test of time.",
  },
  {
    img: "/image/uniform_3.JPG",
    img_2: "/image/uniform_4.webp",
    title: "Complete Tailoring Solutions for Corporate, Industrial, and School Uniforms",
    desc: "Our expert tailoring team offers complete solutions for corporate, industrial, and school uniforms. From design to fitting and finishing, we handle every aspect of the tailoring process with meticulous attention to detail.",
  },
  {
    img: "/image/uniform_5.jpg",
    img_2: "/image/uniform_6.webp",
    title: "Manufacturers of Ready-Made School Uniforms",
    desc: "In addition to our custom tailoring services, we also specialize in the manufacture of ready-made school uniforms. Our ready-made uniforms are crafted with the same commitment to quality and precision as our bespoke garments, offering a convenient and reliable solution for schools.",
  },
  {
    img: "/image/labcoat_1.jpg",
    img_2: "/image/labcoat_2.jpg",
    title: "Suppliers of Hospital Uniforms",
    desc: "We supply high-quality fabrics specifically designed for hospital uniforms, including lab coats, women’s medical vests, nurse wears, and other essential healthcare attire.",
  },
  {
    img: "/image/saree.webp",
    img_2: "/image/saree_2.jpg",
    title: "Supplying Uniform Sarees and Salwars",
    desc: "Our collection also includes uniform sarees and salwars, perfect for institutions that require traditional yet professional attire.",
  },
];

export function OtherCourses() {
  return (
    <section className="pb-20 px-8" id="Services">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Our Services
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          We pride ourselves on offering a comprehensive range of services tailored to meet the diverse needs of our clients. With over 40+ years of expertise in the tailoring industry, we ensure the highest quality and precision in everything we do. 
          Explore our services below:
        </Typography>
      </div>
      <div className="container mx-auto items-center flex flex-col gap-x-10 gap-y-20 md:grid-cols-2">
        {OTHER_COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default OtherCourses;
