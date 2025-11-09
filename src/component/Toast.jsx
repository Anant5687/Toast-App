import React, { useEffect, useState } from 'react';

const toastType = {
  success: {
    background: '#FFFFFF',
    color: '#000000',
  },
  error: {
    background: '#611212ff',
    color: '#FFFFFF',
  },
  info: {
    background: '#9ed5e9ff',
    color: '#FFFFFF',
  },
};

const Toast = ({ message, type }) => {
  const [visiblity, setVisibility] = useState('block');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setVisibility('none');
    }, 1500);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div
      style={{
        background: toastType[type].background,
        color: toastType[type].color,
        padding: '16px',
        marginTop: '8px',
        borderRadius: '16px',
        display: visiblity,
      }}
    >
      <p>{message}</p>
    </div>
  );
};

export default Toast;
