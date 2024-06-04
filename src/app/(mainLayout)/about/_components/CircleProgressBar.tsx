'use client'

import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircleProgressBar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const value = 66;

  if (!isClient) {
    return null; 
  }

  return (
    <div style={{ width: 140, height: 150 }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          // Path color
          pathColor: `rgba(62, 152, 199, ${value / 100})`,
          // Path transition duration
          pathTransitionDuration: 0.5,
          // Text color
          textColor: '#f88',
          // Text size
          textSize: '16px',
          // Trail color
          trailColor: '#d6d6d6',
          // Background color
          backgroundColor: '#3e98c7',
        })}
      />
    </div>
  );
};

export default CircleProgressBar;
