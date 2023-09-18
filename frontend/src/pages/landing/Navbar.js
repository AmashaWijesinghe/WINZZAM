import React from 'react';

const CustomNavbar = () => {
  const navbarStyle = {
    backgroundColor: '#f8f9fa',
    padding: '5px 0',
  };

  const linkStyle = {
    marginRight: '15px',
    padding: '10px 15px', // Added padding
    color: '#343a40',
    textDecoration: 'none',
    transition: 'color 0.3s', // Added transition for smooth color change
  };

  const rightAlignedNav = {
    display: 'flex',
    justifyContent: 'flex-end',
  };

  const handleLinkHover = (event) => {
    event.target.style.color = '#007bff'; // Change color on hover
  };

  const handleLinkHoverOut = (event) => {
    event.target.style.color = '#343a40'; // Revert color on hover out
  };

  return (
    <nav style={navbarStyle}>
      <div style={rightAlignedNav}>
        <a
          href="#"
          style={linkStyle}
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkHoverOut}
        >
          About
        </a>
        <a
          href="#"
          style={linkStyle}
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkHoverOut}
        >
          Contact Us
        </a>
        <a
          href="#"
          style={linkStyle}
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkHoverOut}
        >
          FAQ
        </a>
        <a
          href="#"
          style={linkStyle}
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkHoverOut}
        >
          Reviews
        </a>
      </div>
    </nav>
  );
};

export default CustomNavbar;
