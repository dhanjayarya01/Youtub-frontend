import React, { useEffect, useState } from 'react';

const DeviceWarning = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobileRegex = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone|IEMobile|Opera Mini/i;

    setIsMobile(mobileRegex.test(userAgent));
  }, []);

  return (
    <div style={{
      display: isMobile ? 'block' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      background: '#ff9800',
      color: '#fff',
      padding: '10px',
      textAlign: 'center'
    }}>
      This website is best viewed on a PC or laptop.
    </div>
  );
};

export default DeviceWarning;
