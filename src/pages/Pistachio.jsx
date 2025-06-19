
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Pistachio = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-800 to-green-300 text-white">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-10">
        <div className="max-w-lg">
          <h1 className="custom-font text-9xl font-bold ml-10">icecream</h1>
          <h2 className="font-[Poppins] text-4xl mt-4 font-bold ml-10 transition-all duration-700 ease-in-out">
            Evergreen cone
        </h2>

          <p className="mt-4 ml-10">
            Embark on a culinary journey of delight as you immerse yourself in our artisan-crafted ice cream collection—each flavor a story, each scoop an unforgettable chapter in your sweet odyssey!
          </p>
          <p className="mt-2 ml-10">
            Indulge in a world of imagination, where every scoop unveils a new taste adventure! choose your favorite
          </p>
          <div className="flex gap-16 mt-30 ml-8 justify-center">
          {/* Strawberry */}
          <div 
            className="w-24 h-24 relative rounded-lg border-2 border-white bg-transparent overflow-hidden cursor-pointer hover:shadow-md transition-transform transform hover:scale-105"
            onClick={() => navigate('/')}
          >
            <img 
              src="/strawberry.png" 
              alt="Strawberry" 
              className="w-full h-full object-contain p-1"
            />
          </div>

          {/* Blueberry */}
          <div 
            className="w-24 h-24 relative rounded-lg border-2 border-white bg-transparent overflow-hidden cursor-pointer hover:shadow-md transition-transform transform hover:scale-105"
            onClick={() => navigate('/blueberry')}
          >
            <img 
              src="/blueberry.png" 
              alt="Blueberry" 
              className="w-full h-full object-contain p-1"
            />
          </div>

          {/* Vanilla */}
          <div 
            className="w-24 h-24 relative rounded-lg border-2 border-white bg-transparent overflow-hidden cursor-pointer hover:shadow-md transition-transform transform hover:scale-105"
            onClick={() => navigate('/vanilla')}
          >
            <img 
              src="/choco.png" 
              alt="Vanilla" 
              className="w-full h-full object-contain p-1"
            />
          </div>

          {/* Pistachio */}
          <div 
            className="w-24 h-24 relative rounded-lg border-2 border-white bg-transparent overflow-hidden cursor-pointer hover:shadow-md transition-transform transform hover:scale-105"
            onClick={() => navigate('/pistachio')}
          >
            <img 
              src="/pista.png" 
              alt="Pistachio" 
              className="w-full h-full object-contain p-1"
            />
          </div>
        </div>
        </div>
        <div className="mt-10 md:mt-0">
          <img src="/pista_big.png" alt="Pistachio Cone" className="w-[400px] mt-6" onClick={() => navigate('/')}/>
        </div>
      </div>
    </div>
  );
};

export default Pistachio;


