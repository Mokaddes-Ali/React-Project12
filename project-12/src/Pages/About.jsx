import React, { useContext } from "react";
import { ColorContext } from "../Components/ColorContext";
import { TiSocialFacebook } from "react-icons/ti";
import { RiLinkedinLine } from "react-icons/ri";
import { TiSocialPinterest } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import image from "../assets/Images/about.jpg";

const About = () => {
  const { colors, currentColorIndex } = useContext(ColorContext);
  const selectedColor = colors[currentColorIndex];

  return (
    <div id="about" className=" h-[550px] dark:bg-black w-[1348px]">
      <div className="flex p-24 justify-center items-center mx-auto mt-[100px]">
        <div className="">
          {/* Left side: Image */}
          <img src={image} alt="Profile" className=" border-2 dark:border-zinc-600 rounded-lg ml-5 h-[370px] w-[500px]" />
        </div>
        <div className="w-1/2 pl-8 ml-4">
          {/* Right side: Text content */}
          <h1 className="text-3xl font-bold -mt-3 mb-4 dark:text-white">About Me</h1>
          <h2 className="text-3xl font-semibold mb-4 dark:text-white">
            Hello!{" "}
            <span style={{ color: selectedColor.text }}> I'M Kerri Deo.</span>
          </h2>
          <p className="text-gray-600  leading-relaxed dark:text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxed dark:text-white">
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxed dark:text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          {/* Social icons */}
          <div className="space-x-4">
          <div
            style={{ color: selectedColor.text }}
            className="inline-block p-2 mt-5 space-x-3 rounded-full dark:ring-1 dark:ring-white ring-1 dark:hover:ring-orange-700 ring-black hover:ring-1 hover:ring-orange-700"
          >
            <TiSocialFacebook className="hover:text-orange-700" size={35} />
          </div>
          <div
            style={{ color: selectedColor.text }}
            className="inline-block p-2 gap-5 rounded-full ring-1 dark:ring-1 dark:ring-white dark:hover:ring-orange-700 ring-black hover:ring-1 hover:ring-orange-700"
          >
            <RiLinkedinLine className="hover:text-orange-700"  size={35} />
          </div>
          <div
            style={{ color: selectedColor.text }}
            className="inline-block p-2 rounded-full ring-1 dark:ring-1 dark:ring-white dark:hover:ring-orange-700 ring-black hover:ring-1 hover:ring-orange-700"
          >
            <TiSocialPinterest className="hover:text-orange-700" size={35} />
          </div>
          <div
            style={{ color: selectedColor.text }}
            className="inline-block p-2 rounded-full ring-1 dark:ring-1 dark:ring-white dark:hover:ring-orange-700 ring-black hover:ring-1 hover:ring-orange-700"
          >
            <TiSocialTwitter className="hover:text-orange-700" size={35} />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
