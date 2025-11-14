import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
    </div>
  );
};

export default AnimatedBackground;
