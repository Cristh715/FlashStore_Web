import React from 'react';

const Button = ({ text, icon: Icon, onClick, ...props }) => {
  return (
    <button className="button" onClick={onClick} {...props}>
      {Icon && <Icon className="button-icon" />}
      {text}
    </button>
  );
};

export default Button;
