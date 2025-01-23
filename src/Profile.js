import React from 'react';
import backgroundImage from './assets/background.jpeg';
import logoImage from './assets/logo.jpeg';
import profileImage from './assets/profile.jpg';

const SquidGameProfile = () => {
  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div 
        className="bg-black bg-opacity-70 border-4 border-[#e20000] rounded-2xl p-8 w-[300px] 
        shadow-lg text-center"
      >
        <img
          src={logoImage}
          alt="Squid Game Logo"
          className="w-[120px] mx-auto mb-5"
        />
        <img 
          src={profileImage}
          alt="Rajeev's Photo"
          className="w-[120px] h-[120px] rounded-full border-4 border-[#e20000] 
          shadow-lg mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-[#e20000]">
          Shlok Agrahari
        </h1>
        <p className="text-base mt-2.5 text-white text-opacity-80">
          Registration No: 20235079
        </p>
        <p className="text-lg mt-4 text-white text-opacity-70 italic">
          "The shape you choose will determine your fate."
        </p>
        <p className="text-lg mt-2 text-white text-opacity-70 italic">
          "Do you want to play a game with us?"
        </p>
        <a 
          href="https://www.instagram.com/_shlok_agrahari_/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-5 px-5 py-3 bg-[#e20000] text-white 
          font-bold rounded-md shadow-lg hover:bg-[#b40000] transition-colors"
        >
          Visit My Instagram
        </a>
      </div>
    </div>
  );
};

export default SquidGameProfile;