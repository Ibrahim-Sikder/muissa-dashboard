// components/ProgressBar.js
'use client'

import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type TProps = {
    value: number,
    text:boolean,
}
const CircleProgressBar = () => {
  const value = 66;
  return (
    <div style={{ width: 140, height: 150 }}>
       <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: `rgba(62, 152, 199, ${value / 100})`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'round',
              // Customize transition animation
              transition: 'stroke-dashoffset 0.5s ease 0s',
              // Rotate the path
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            // Customize the text
            text: {
              // Text color
              fill: '#f88',
              // Text size
              fontSize: '16px',
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: '#3e98c7',
            },
          })}
        />
    </div>
  );
};

export default CircleProgressBar;
