"use client";

import React, { useState, useEffect } from "react";
import "./Preloader.css";
const SubscriptionAlert: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show the alert box after the component is mounted on the client
    setIsVisible(true);
  }, []);

  const closeAlert = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="alert-box">
      <div className="alert-content">
        <p>Your alert message goes here.</p>
        <button onClick={closeAlert}>Close</button>
      </div>
    </div>
  );
};

export default SubscriptionAlert;
