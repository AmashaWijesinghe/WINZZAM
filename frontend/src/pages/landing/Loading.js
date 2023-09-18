import React from 'react';

const LoadingScreen = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            borderRadius: '50%',
            border: '4px solid #3498db',
            borderTop: '4px solid transparent',
            width: '40px',
            height: '40px',
            animation: 'spin 1s linear infinite',
          }}
        ></div>
        <p
          style={{
            marginTop: '16px',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          Please wait...
        </p>
      </div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;
