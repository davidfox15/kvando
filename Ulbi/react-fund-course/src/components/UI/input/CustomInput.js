import React from 'react';
import classes from './CustomInput.module.css';

const CustomInput = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <input ref={ref} {...props} className={classes.myInput}>
      {children}
    </input>
  );
});

export default CustomInput;
