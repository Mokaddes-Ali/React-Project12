import React, { useEffect, useState } from 'react';

const HeroAnimation = () => {
  const [index, setIndex] = useState(1);
  const phrases = ['Mokaddes Ali', 'a Web Developer', 'a Software Developer'];
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(phrases[index].substring(0, currentText.length + 1));
      if (currentText === phrases[index]) {
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setCurrentText('');
        }, 1000); // Pause at the end of the phrase
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [currentText, index, phrases]);

  return (
    <div className="flex items-center space-x-2">
      <span className="font-bold text-[50px] text-white">I'M </span>
      <span className="font-bold text-[50px] text-white">{currentText}</span>
      <span className="typed-cursor animate-blink" aria-hidden="true">|</span>
    </div>
  );
};

export default HeroAnimation;

// Add these styles in a style tag or in your global CSS file
const style = document.createElement('style');
style.innerHTML = `
  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .typed-cursor {
    animation: blink 1s infinite;
  }
`;
document.head.appendChild(style);

// import React, { useEffect, useState } from 'react';

// const HeroAnimation = () => {
//   const [index, setIndex] = useState(0);
//   const phrases = ['a Web Designer', 'a Web Developer', 'a Software Developer'];
//   const [currentText, setCurrentText] = useState('');

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentText((prevText) => {
//         const currentPhrase = phrases[index];
//         if (prevText.length === currentPhrase.length) {
//           setTimeout(() => {
//             setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
//             setCurrentText('');
//           }, 1000); // Pause at the end of the phrase
//           return prevText;
//         } else {
//           return currentPhrase.substring(0, prevText.length + 1);
//         }
//       });
//     }, 100);

//     return () => clearInterval(intervalId); // Clean up interval
//   }, [index, phrases]);

//   return (
//     <div className="flex items-center space-x-2 text-white">
//       <span className="font-bold text-4xl">I am </span>
//       <span className="font-bold text-4xl">{currentText}</span>
//       <span className="typed-cursor animate-blink" aria-hidden="true">|</span>
//     </div>
//   );
// };

// export default HeroAnimation;

// import React, { useEffect, useState } from 'react';

// const HeroAnimation = () => {
//   const [index, setIndex] = useState(0);
//   const phrases = ['a Web Designer', 'a Web Developer', 'a Software Developer'];
//   const [currentText, setCurrentText] = useState('');

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentText((prevText) => {
//         const currentPhrase = phrases[index];
//         if (prevText.length === currentPhrase.length) {
//           setTimeout(() => {
//             setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
//             setCurrentText('');
//           }, 1000); // Pause at the end of the phrase
//           return prevText;
//         } else {
//           return currentPhrase.substring(0, prevText.length + 1);
//         }
//       });
//     }, 100);

//     return () => clearInterval(intervalId); // Clean up interval
//   }, [index, phrases]);

//   return (
//     <div className="flex items-center space-x-2 text-white">
//       <span className="font-bold text-4xl">I am </span>
//       <span className="font-bold text-4xl">{currentText}</span>
//       <span className="typed-cursor animate-blink" aria-hidden="true">|</span>
//     </div>
//   );
// };

// export default HeroAnimation;

// // Tailwind CSS
// const style = document.createElement('style');
// style.innerHTML = `
//   @keyframes blink {
//     0%, 100% {
//       opacity: 1;
//     }
//     50% {
//       opacity: 0;
//     }
//   }

//   .animate-blink {
//     animation: blink 1s infinite;
//   }
// `;
// document.head.appendChild(style);
