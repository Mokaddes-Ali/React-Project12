import React from 'react';
import { useColor } from './ColorContext';

const OtherComponent = () => {
  const { color } = useColor();

  return (
    <div>
      <div className={`p-4 ${color}`}>
        This is a text element in OtherComponent that will change color.
      </div>
      <div className={`p-4 ${color}`}>
        Another text element in OtherComponent that will change color.
      </div>
    </div>
  );
};

export default OtherComponent;
