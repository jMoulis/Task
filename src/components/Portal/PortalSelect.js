import React from 'react';

const PortalSelect = ({ children, handleOpen }) => {
  return React.Children.map(children, child =>
    React.cloneElement(child, { onClick: () => handleOpen(true) }),
  );
};

export default PortalSelect;
