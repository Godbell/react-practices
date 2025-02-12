import React, { useState, useEffect } from 'react';
import './assets/scss/App.scss';
import Clock from './Clock';

function getCurrentTime() {
  return {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  };
}

export default function App({ unmount }) {
  const [currentTime, setCurrentTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
      setTicks((current) => current + 1);
    }, 1000);

    return () => {
      console.log(`clearing interval ${intervalId}`);
      clearInterval(intervalId);
    };
  }, []);

  return ticks % 10 === 0 ? null : (
    <Clock
      title={`ex04: Clock Component II: ${ticks}`}
      hours={currentTime.hours}
      minutes={currentTime.minutes}
      seconds={currentTime.seconds}
    />
  );
}
