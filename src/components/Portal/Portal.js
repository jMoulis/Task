import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { PortalSelect } from '.';

const Portal = ({ children, container }) => {
  const [isOpen, handleOpen] = useState(false);
  const listenClick = event => {
    if (container && container.contains(event.target)) {
      return null;
    }
    if (isOpen) {
      return setTimeout(() => {
        handleOpen(false);
      }, 300);
    }
  };
  useEffect(() => {
    window.addEventListener('click', listenClick, false);
    return () => {
      window.removeEventListener('click', listenClick, false);
    };
  });
  if (!container) return null;
  const inputChildren = React.Children.map(children, child => {
    if (child.type === PortalSelect) {
      return React.cloneElement(child, {
        handleOpen,
      });
    }
    return (
      isOpen &&
      ReactDOM.createPortal(
        React.cloneElement(child, { handleOpen }),
        container,
      )
    );
  });
  return inputChildren;
};

export default Portal;
