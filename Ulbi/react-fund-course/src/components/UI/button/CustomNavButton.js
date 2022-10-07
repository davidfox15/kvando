import React from 'react';
import style from './CustomNavButton.module.css';

export default function CustomNavButton({ children, ...props }) {
  return (
    <button {...props} className={style.NavBtn}>
      {children}
    </button>
  );
}
