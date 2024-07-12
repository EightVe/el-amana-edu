import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ConditionalLink = ({ to, refresh, children, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (refresh) {
      // Refresh the page
      window.location.href = to;
    } else {
      // Prevent the default behavior of the link
      event.preventDefault();
      // Navigate without refresh
      navigate(to);
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default ConditionalLink;
