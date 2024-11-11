import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  onComplete: () => void;
}

export function CountdownTimer({ targetDate, onComplete }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    
    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24) + (days * 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      if (newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        clearInterval(timer);
        onComplete();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  return (
    <div className="flex items-center justify-center space-x-4">
      <TimeUnit value={timeLeft.hours} label="HOURS" />
      <span className="text-3xl font-light text-[#A7A7A7]">:</span>
      <TimeUnit value={timeLeft.minutes} label="MINUTES" />
      <span className="text-3xl font-light text-[#A7A7A7]">:</span>
      <TimeUnit value={timeLeft.seconds} label="SECONDS" />
    </div>
  );
}

interface TimeUnitProps {
  value: number;
  label: string;
}

function TimeUnit({ value, label }: TimeUnitProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold text-[#A7A7A7]">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-xs font-medium text-[#A7A7A7] mt-1">{label}</span>
    </div>
  );
}