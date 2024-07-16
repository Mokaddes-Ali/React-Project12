import React, { useContext } from 'react';
import { FaPalette, FaBullhorn, FaWifi, FaMobileAlt, FaCogs } from 'react-icons/fa';
import { ColorContext } from '../Components/ColorContext';
import { FiEdit } from "react-icons/fi";
import { PiChartLineUpThin } from "react-icons/pi";
import { TbBoxMultiple } from "react-icons/tb";
import { BsCupHot } from "react-icons/bs";
import { BsCloudUpload } from "react-icons/bs";
import { LiaPenSquareSolid } from "react-icons/lia";

const Services = () => {
  const { colors, currentColorIndex } = useContext(ColorContext);
  const selectedColor = colors[currentColorIndex];
  
  const services = [
    { icon: PiChartLineUpThin , title: 'Graphic Design', description: 'There are many variations of passages of but the majority have suffered alteration in some form.' },
    { icon: BsCupHot, title: 'Unlimited Color', description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.' },
    { icon: BsCloudUpload, title: 'Media Marketing', description: 'It is a long established fact that a reader will be distracted by the readable content of a page.' },
    { icon: TbBoxMultiple, title: 'Unlimited Wifi', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.' },
    { icon: LiaPenSquareSolid, title: 'Responsive Design', description: 'Making it look like readable English. Various versions have evolved over the years, sometimes by accident.' },
    { icon: FiEdit, title: 'Easy to Customize', description: 'Injected humour, or randomised words which do not look even slightly believable. You need to be sure there.' },
  ];

  return (
    <section id="services" className="py-12 bg-gray-100 w-[1348px] dark:bg-black">
      <div className="pl-16 pr-16">
       <div className="mt-10 mb-20">
        <h1 className="flex justify-center items-center text-black font-semibold text-[50px] mt-5 mb-7 dark:text-white">Our <span className=" text-black ml-3 text-[45px] font-bold dark:text-white" >Services</span></h1>
        <p className="flex justify-center items-center text-center text-xl mr-[350px] ml-[350px] text-gray-600 dark:text-white">
          It is a long established fact that a reader will be of a page when established fact looking at its layout.
        </p>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return(
              <div
                key={index}
                className="p-6 bg-white dark:bg-slate-950 dark:text-white rounded-lg shadow-md flex flex-col items-center text-center group"
              >
                <Icon style={{ color: selectedColor.text }}
                  className="text-5xl mb-4 cursor-pointer transition-transform duration-300 text-black group-hover:text-black"
                />
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
              <div style={{ backgroundColor: selectedColor.bg, color: selectedColor.text }} className=" w-24 h-1 mb-4 transition-all duration-300 group-hover:w-36 rounded-full bg-slate-500"></div>
                <p className="text-gray-600 dark:text-white">{service.description}</p>
               
              </div>
            );
          })}
        </div>
        </div>
    </section>
  );
};

export default Services;
