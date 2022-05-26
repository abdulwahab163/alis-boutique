import React from 'react';

const ContainerPrimary = ({ children, className }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default ContainerPrimary;
