import React, { useState } from 'react';
import { Hourglass } from 'lucide-react';
import { CountdownTimer } from './components/CountdownTimer';

function App() {
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);
  
  // Set target date to 8:39 PM AEDT on November 11, 2024
  const targetDate = new Date('2024-11-11T21:04:00+11:00');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#272727] to-[#1e1e1e] flex flex-col items-center px-6 py-12">
      {/* Logo Section */}
      <div className="mb-16">
      <img src="/assets/kismet-logo-heart_white.svg" alt="Logo" className="w-16 h-16" />
      </div>

      {/* Riddle Section */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-md text-center mb-16">
        <p className="text-lg text-[#A7A7A7] leading-relaxed">
          "In a galaxy of <span className="text-[#FFFFFF]">stars</span>, where stars shine bright,
          <br />
          A <span className="text-[#FFFFFF]">crimson</span> gem awaits, beyond the city's light.
          <br />
          Seek where <span className="text-[#FFFFFF]">fortune</span> and flavour intertwine,
          <br />
          Name the <span className="text-[#FFFFFF]">fruit</span>, and you'll find the sign."
        </p>
      </div>

      {/* Dynamic Bottom Section */}
      <div className="w-full max-w-md text-center">
        {!isCountdownComplete ? (
          <CountdownTimer 
            targetDate={targetDate}
            onComplete={() => setIsCountdownComplete(true)}
          />
        ) : (
            <div className="bg-[#272727]/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-[#A7A7A7]/10">
            <img
              src="/assets/cherry.png"
              alt="Cherry"
              className="w-full h-32 object-contain rounded-lg mb-6"
            />
            <h2 className="text-xl font-semibold text-[#A7A7A7] mb-4">
              Location Revealed
            </h2>
            <p className="text-[#A7A7A7] leading-relaxed">
              Level 1, Casino
              <br />
              The Star, 80 Pyrmont Street
              <br />
              Pyrmont NSW 2009
            </p>
            </div>
        )}
      </div>
    </div>
  );
}

export default App;