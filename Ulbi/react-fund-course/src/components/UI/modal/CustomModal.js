import React from 'react';
import cl from './customModal.module.css';

const CustomModal = ({ children, visible, setVisible, ...props }) => {
  const rootClasses = [cl.customModal];

  if (visible) rootClasses.push(cl.active);

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(prev => !prev)}>
      <div className={cl.customModalContent} onClick={event => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
