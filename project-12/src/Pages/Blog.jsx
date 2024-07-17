import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import image1 from '../assets/Images/blog-1.jpg'; 
import image2 from '../assets/Images/blog-2.jpg'; 
import image3 from '../assets/Images/blog-3.jpg'; 
import { ColorContext } from '../Components/ColorContext';


const Blog = () => {
    const { colors, currentColorIndex } = useContext(ColorContext);
    const selectedColor = colors[currentColorIndex];
  const blogData = [
    {
      id: image1, 
      title: 'There are many variations',
      date: '11 March 2018',
      author: 'Kerri',
      content:
        'Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.',
    },
    {
      id: image2,
      title: 'Contrary to popular belief',
      date: '18 March 2018',
      author: 'Kerri',
      content:
        'Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.',
    },
    {
      id: image3,
      title: 'Lorem Ipsum is not simply',
      date: '22 March 2018',
      author: 'Kerri',
      content:
        'Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.',
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div id="blog" className="w-[1348px] mt-10 pt-10 mb-16 bg-[#f8f9fa] dark:bg-slate-950 dark:text-white">
      <div className="container mx-auto">
      <div className="mt-10 mb-20">
        <h1 className="flex justify-center items-center text-black font-semibold text-[50px] mt-5 mb-7 dark:text-white">Our <span className=" text-black ml-3 text-[45px] font-bold dark:text-white" >Blog</span></h1>
        <p className="flex justify-center items-center text-center text-xl mr-[350px] ml-[350px] text-gray-600 dark:text-white">
          It is a long established fact that a reader will be of a page when established fact looking at its layout.
        </p>
      </div>
      <Slider {...sliderSettings}>
        {blogData.map((blog) => (
          <div key={blog.id} className="px-6">
            <motion.div
              whileHover={{ backgroundColor: '', transform: 'rotate(0deg)', transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-900 dark:text-white h-68 w-84 mt-5 rounded-lg shadow-md overflow-hidden"
              style={{ transformOrigin: 'center' }}
            >
              <img
                src={blog.id} 
                alt={`Blog Image ${blog.id}`}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-black mb-2 dark:text-white ">{blog.title}</h2>
                <p className="text-lg flex text-gray-600 mb-2 dark:text-white ">{blog.date}
                  <span style={{ color: selectedColor.text }} className="text-xl ml-2 text-orange-500 mb-4">By {blog.author}</span></p>
                <p className="text-lg text-gray-700 dark:text-white ">{blog.content}</p>
                <a href="#" className="dark:text-white  block mt-2" style={{ color: selectedColor.text }}>
                  Read More...
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Blog;
