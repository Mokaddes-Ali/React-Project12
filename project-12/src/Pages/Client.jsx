// import React,{ useContext } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { ColorContext } from '../Components/ColorContext';

// const Client = () => {
//     const { colors, currentColorIndex } = useContext(ColorContext);
//     const selectedColor = colors[currentColorIndex];
//   const clients = [
//     { id: 1, name: 'Client A', imageUrl: '/images/client-a.jpg', description: 'Description for Client A', link: '/client-a' },
//     { id: 2, name: 'Client B', imageUrl: '/images/client-b.jpg', description: 'Description for Client B', link: '/client-b' },
//     { id: 3, name: 'Client C', imageUrl: '/images/client-c.jpg', description: 'Description for Client C', link: '/client-c' }
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false, // Disable default arrows
//     appendDots: dots => (
//       <ul className="m-4 p-4 flex justify-center">
//         {dots.map((dot, index) => (
//           <li key={index} className="">{dot}</li> // Increase the margin for more separation
//         ))}
//       </ul>
//     ),
//     customPaging: i => (
//       <div className="py-1  px-[14px] rounded-full mt-10" style={{ backgroundColor: selectedColor.bg}}></div>
//     )
//   };

//   return (
//     <div id="client" className=" w-[1348px] container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
//       <Slider {...settings}>
//         {clients.map(client => (
//           <a key={client.id} href={client.link} className="focus:outline-none">
//             <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
//               <img src={client.imageUrl} alt={client.name} className="w-full h-64 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
//                 <p className="text-gray-700">{client.description}</p>
//               </div>
//             </div>
//           </a>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Client;

import React, { useContext, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ColorContext } from '../Components/ColorContext';
import { AiOutlineUser } from 'react-icons/ai'; 
import imag1 from '../assets/Images/testi-1.jpg';
import imag2 from '../assets/Images/testi-2.jpg';
import imag3 from '../assets/Images/testi-3.jpg';

const Client = () => {
    const { colors, currentColorIndex } = useContext(ColorContext);
    const selectedColor = colors[currentColorIndex];

    const [activeSlide, setActiveSlide] = useState(0); 

    const clients = [
        { id: 1, name: 'Client A', imageUrl: imag1, description: '" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"', link: '/client-a', icon:<AiOutlineUser /> },
        { id: 2, name: 'Client B', imageUrl: imag2, description: '" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"', link: '/client-b', icon:<AiOutlineUser /> },
        { id: 3, name: 'Client C', imageUrl: imag3, description: '" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"', link: '/client-c', icon:<AiOutlineUser /> }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        appendDots: dots => (
            <ul className="m-4 p-4 flex justify-center">
                {dots.map((dot, index) => (
                    <li key={index} className={index === activeSlide ? 'slick-active' : ''}>
                        <button
                            className="focus:outline-none rounded-full w-4 h-4 mx-1"
                            style={{ backgroundColor: index === activeSlide ? selectedColor.bg : '#ccc' }}
                            onClick={() => setActiveSlide(index)}
                        />
                    </li>
                ))}
            </ul>
        ),
        customPaging: i => (
            <div className="py-1 px-[14px] rounded-full mt-10" style={{ backgroundColor: selectedColor.bg }}></div>
        ),
        beforeChange: (oldIndex, newIndex) => {
            setActiveSlide(newIndex);
        }
    };

    return (
        <div id="client" className="bg-black dark:bg-slate-900">
            <div className="w-[1348px]">
                <h2 className="text-3xl font-bold mb-4 text-center">Our Clients</h2>
                <Slider {...settings}>
                    {clients.map(client => (
                        <a key={client.id} href={client.link} className="focus:outline-none">
                            <div className=" w-[600px] justify-center items-center ml-[400px] rounded-lg shadow-lg">
                                <div className=" h-12  text-center">
                                    <span className="mr-2 text-4xl ">{client.icon}</span>
                                </div>
                                <div className="">
                                <img src={client.imageUrl} alt={client.name} className="w-40 ml-48 h-40 rounded-full" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2 text-center">{client.name}</h3>
                                    <p className="text-gray-700 text-center">{client.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Client;
