import React from 'react';
import cl from './CustomLoader.module.css';

const CustomLoader = () => {
  return (
    <div className={cl.Box}>
      <div className={cl.Loader}></div>
    </div>
  );
};

export default CustomLoader;
