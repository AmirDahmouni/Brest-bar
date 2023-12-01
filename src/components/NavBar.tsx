import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="bg-secondColor py-5 px-4 flex justify-between items-center text-white">
      <div className="flex items-center text-white hover:text-violet text-3xl">
        <p>
          🍻
          <span className='hover:text-primaryColor'>Brest</span>
          <span className="gradient-text bg-clip-text text-transparent text-3xl font-bold"> bar</span>
        </p>
      </div>
      <button className="rounded-[4px] bg-violet px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105">
        🙋‍♀️
        Faire une demande</button>
    </div>
  );
};

export default Navbar;