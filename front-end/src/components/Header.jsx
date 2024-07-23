import React from 'react';

const Header = ({ title, bgImage }) => {
  return (
    <div 
      className="bg-center bg-repeat p-6 rounded-lg shadow-md mb-6 relative" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-white opacity-70 rounded-lg"></div>
      <h2 className="relative text-3xl font-bold text-center text-gray-800" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>
        {title}
      </h2>
    </div>
  );
};

export default Header;