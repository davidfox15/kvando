import React from 'react';
import classes from './CustomInput.module.css';

export default function CustomInput({ children, ...props }) {
  return (
    <input {...props} className={classes.myInput}>
      {children}
    </input>
  );
}
