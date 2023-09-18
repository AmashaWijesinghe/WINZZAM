import React from 'react';

const CardContainer = ({ icon, title, description ,  setIsEntrance ,setState}) => {

  const cardStyle = {
    border: 'none',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const iconStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '48px',
    marginBottom: '20px',
    color: '#007bff'
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',

  };
  const titleStyle = {
    color: '#007bff'

  };

  return (
    <div className="col-md-4">
      <div style={cardStyle}>
        <div style={iconStyle}>{icon}</div>
        <h4 style={titleStyle}>{title}</h4>
        <p>{description}</p>
        <button style={buttonStyle} 
        onClick={() => {
            console.log("Clicked")
            setIsEntrance(true)
            setState(title)
        }}>Join </button>
      </div>
    </div>
  );
};

export default CardContainer;
