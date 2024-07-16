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
    <div id="about" className="ml-14 h-96 dark:bg-black">
      <div className="flex justify-center items-center mx-auto mt-[100px]">
        <div className="">
          {/* Left side: Image */}
          <img src={image} alt="Profile" className=" h-[370px] w-[510px]" />
        </div>
        <div className="w-1/2 pl-8">
          {/* Right side: Text content */}
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <h2 className="text-3xl font-bold mb-4">
            Hello!{" "}
            <span style={{ color: selectedColor.text }}> I'M Kerri Deo.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <p className="text-gray-600 leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          {/* Social icons */}

          <div
            style={{ color: selectedColor.text }}
            className="inline-block p-2 rounded-full bg-slate-500"
          >
            <TiSocialFacebook className="hover:text-orange-700" size={24} />
          </div>
          <div
            style={{ color: selectedColor.text }}
            className="inline-block p-2 rounded-full"
          >
            <RiLinkedinLine size={24} />
          </div>
          <div
            style={{ color: selectedColor.text }}
            className="inline-block p-2 rounded-full"
          >
            <TiSocialPinterest size={24} />
          </div>
          <div
            style={{ color: selectedColor.text }}
            className="inline-block p-2 rounded-full"
          >
            <TiSocialTwitter size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
