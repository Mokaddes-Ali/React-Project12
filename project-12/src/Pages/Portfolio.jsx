
// import React, { useState } from 'react';
// import PortfolioCard from '../Components/PortfolioCard';
// import image1 from '../assets/Images/2.jpg';
// import image2 from '../assets/Images/3.jpg';
// import image3 from '../assets/Images/5.jpg';
// import image4 from '../assets/Images/1.jpg';
// import image5 from '../assets/Images/2.jpg';
// import image6 from '../assets/Images/2.jpg';
// import image7 from '../assets/Images/4.jpg';
// import image8 from '../assets/Images/4.jpg';
// import image9 from '../assets/Images/5.jpg';
// import image10 from '../assets/Images/6.jpg';
// import image11 from '../assets/Images/1.jpg';
// import image12 from '../assets/Images/3.jpg';
// import image13 from '../assets/Images/4.jpg';
// import image14 from '../assets/Images/1.jpg';

// const Portfolio = () => {
//   const [activeCategory, setActiveCategory] = useState('All');

//   const cards = [
//     { id: 1, category: 'Seo', image: image1, title: 'Mockup Design 1', description: 'Description for Mockup Design 1' },
//     { id: 2, category: 'Seo', image: image2, title: 'Mockup Design 2', description: 'Description for Mockup Design 2' },
//     { id: 3, category: 'Seo', image: image3, title: 'Mockup Design 3', description: 'Description for Mockup Design 3' },
//     { id: 4, category: 'WebDesign', image: image4, title: 'Graphic Design 1', description: 'Description for Graphic Design 1' },
//     { id: 5, category: 'WebDesign', image: image5, title: 'Graphic Design 2', description: 'Description for Graphic Design 2' },
//     { id: 6, category: 'Work', image: image6, title: 'Logo Design 1', description: 'Description for Logo Design 1' },
//     { id: 7, category: 'Work', image: image7, title: 'Logo Design 2', description: 'Description for Logo Design 2' },
//     { id: 8, category: 'WebDesign', image: image8, title: 'Graphic Design 3', description: 'Description for Graphic Design 3' },
//     { id: 9, category: 'WebDesign', image: image9, title: 'Graphic Design 4', description: 'Description for Graphic Design 4' },
//     { id: 10, category: 'WebDesign', image: image10, title: 'Graphic Design 5', description: 'Description for Graphic Design 5' },
//     { id: 11, category: 'WordPress', image: image11, title: 'WordPress Design 1', description: 'Description for WordPress Design 1' },
//     { id: 12, category: 'WordPress', image: image12, title: 'WordPress Design 2', description: 'Description for WordPress Design 2' },
//     { id: 13, category: 'WordPress', image: image13, title: 'WordPress Design 3', description: 'Description for WordPress Design 3' },
//     { id: 14, category: 'All', image: image14, title: 'All Design 1', description: 'Description for All Design 1' },
//   ];

//   const getFilteredCards = () => {
//     switch (activeCategory) {
//       case 'All':
//         return [
//           { id: 14, category: 'All', image: image14, title: 'All Design 1', description: 'Description for All Design 1' },
//           { id: 1, category: 'Seo', image: image1, title: 'Mockup Design 1', description: 'Description for Mockup Design 1' },
//           { id: 2, category: 'Seo', image: image2, title: 'Mockup Design 2', description: 'Description for Mockup Design 2' },
//           { id: 13, category: 'WordPress', image: image13, title: 'WordPress Design 3', description: 'Description for WordPress Design 3' },
//           { id: 3, category: 'Seo', image: image3, title: 'Mockup Design 3', description: 'Description for Mockup Design 3' },
//           { id: 10, category: 'WebDesign', image: image10, title: 'Graphic Design 5', description: 'Description for Graphic Design 5' },
//         ];
//       case 'Seo':
//         return cards.filter(card => card.category === 'Seo').slice(0, 3);
//       case 'WebDesign':
//         return cards.filter(card => card.category === 'WebDesign').slice(0, 5);
//       case 'Work':
//         return cards.filter(card => card.category === 'Work').slice(0, 2);
//       case 'WordPress':
//         return cards.filter(card => card.category === 'WordPress').slice(0, 3);
//       default:
//         return cards;
//     }
//   };

//   const filteredCards = getFilteredCards();

//   return (
//     <div id="portfolio" className="container mx-auto py-8 px-4 w-[1348px]">
//       <div className="mt-10 mb-20">
//         <h1 className="flex justify-center items-center text-black font-semibold text-[50px] mt-5 mb-7">
//           Our <span className="text-black ml-3 text-[45px] font-bold">Works</span>
//         </h1>
//         <p className="flex justify-center items-center text-center text-xl mx-[350px] text-gray-600">
//           It is a long established fact that a reader will be of a page when established fact looking at its layout.
//         </p>
//       </div>
//       <div className="flex justify-center mb-4">
//         {['All', 'Seo', 'WebDesign', 'Work', 'WordPress'].map(category => (
//           <button
//             key={category}
//             onClick={() => setActiveCategory(category)}
//             className={`px-4 py-2 mr-2 rounded focus:outline-none ${
//               activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
//         {filteredCards.map(card => (
//           <PortfolioCard
//             key={card.id}
//             image={card.image}
//             title={card.title}
//             description={card.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;


import React, { useState } from 'react';
import PortfolioCard from '../Components/PortfolioCard';
import image1 from '../assets/Images/2.jpg';
import image2 from '../assets/Images/3.jpg';
import image3 from '../assets/Images/5.jpg';
import image4 from '../assets/Images/1.jpg';
import image5 from '../assets/Images/2.jpg';
import image6 from '../assets/Images/2.jpg';
import image7 from '../assets/Images/4.jpg';
import image8 from '../assets/Images/4.jpg';
import image9 from '../assets/Images/5.jpg';
import image10 from '../assets/Images/6.jpg';
import image11 from '../assets/Images/1.jpg';
import image12 from '../assets/Images/3.jpg';
import image13 from '../assets/Images/4.jpg';
import image14 from '../assets/Images/1.jpg';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const cards = [
    { id: 1, category: 'Seo', image: image1, title: 'Mockup Design 1', description: 'Description for Mockup Design 1' },
    { id: 2, category: 'Seo', image: image2, title: 'Mockup Design 2', description: 'Description for Mockup Design 2' },
    { id: 3, category: 'Seo', image: image3, title: 'Mockup Design 3', description: 'Description for Mockup Design 3' },
    { id: 4, category: 'WebDesign', image: image4, title: 'Graphic Design 1', description: 'Description for Graphic Design 1' },
    { id: 5, category: 'WebDesign', image: image5, title: 'Graphic Design 2', description: 'Description for Graphic Design 2' },
    { id: 6, category: 'Work', image: image6, title: 'Logo Design 1', description: 'Description for Logo Design 1' },
    { id: 7, category: 'Work', image: image7, title: 'Logo Design 2', description: 'Description for Logo Design 2' },
    { id: 8, category: 'WebDesign', image: image8, title: 'Graphic Design 3', description: 'Description for Graphic Design 3' },
    { id: 9, category: 'WebDesign', image: image9, title: 'Graphic Design 4', description: 'Description for Graphic Design 4' },
    { id: 10, category: 'WebDesign', image: image10, title: 'Graphic Design 5', description: 'Description for Graphic Design 5' },
    { id: 11, category: 'WordPress', image: image11, title: 'WordPress Design 1', description: 'Description for WordPress Design 1' },
    { id: 12, category: 'WordPress', image: image12, title: 'WordPress Design 2', description: 'Description for WordPress Design 2' },
    { id: 13, category: 'WordPress', image: image13, title: 'WordPress Design 3', description: 'Description for WordPress Design 3' },
    { id: 14, category: 'All', image: image14, title: 'All Design 1', description: 'Description for All Design 1' },
  ];

  const getFilteredCards = () => {
    switch (activeCategory) {
      case 'All':
        return [
          { id: 14, category: 'All', image: image14, title: 'All Design 1', description: 'Description for All Design 1' },
          { id: 1, category: 'Seo', image: image1, title: 'Mockup Design 1', description: 'Description for Mockup Design 1' },
          { id: 2, category: 'Seo', image: image2, title: 'Mockup Design 2', description: 'Description for Mockup Design 2' },
          { id: 13, category: 'WordPress', image: image13, title: 'WordPress Design 3', description: 'Description for WordPress Design 3' },
          { id: 3, category: 'Seo', image: image3, title: 'Mockup Design 3', description: 'Description for Mockup Design 3' },
          { id: 10, category: 'WebDesign', image: image10, title: 'Graphic Design 5', description: 'Description for Graphic Design 5' },
        ];
      case 'Seo':
        return cards.filter(card => card.category === 'Seo').slice(0, 3);
      case 'WebDesign':
        return cards.filter(card => card.category === 'WebDesign').slice(0, 5);
      case 'Work':
        return cards.filter(card => card.category === 'Work').slice(0, 2);
      case 'WordPress':
        return cards.filter(card => card.category === 'WordPress').slice(0, 3);
      default:
        return cards;
    }
  };

  const filteredCards = getFilteredCards();

  return (
    <div id="portfolio" className="container mx-auto py-8 px-4 w-full">
      <div className="mt-10 mb-20">
        <h1 className="flex justify-center items-center text-black font-semibold text-[50px] mt-5 mb-7">
          Our <span className="text-black ml-3 text-[45px] font-bold">Works</span>
        </h1>
        <p className="flex justify-center items-center text-center text-xl mx-auto text-gray-600 max-w-4xl">
          It is a long established fact that a reader will be of a page when established fact looking at its layout.
        </p>
      </div>
      <div className="flex justify-center mb-4">
        {['All', 'Seo', 'WebDesign', 'Work', 'WordPress'].map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 mr-2 rounded focus:outline-none ${
              activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
        {filteredCards.map(card => (
          <PortfolioCard
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
