import React from 'react';
import classes from './CustomInput.module.css';

const CustomInput = React.forwardRef(({ children, onChange, ...props }, ref) => {
  return (
    <input ref={ref} {...props} className={classes.myInput} onChange={event => onChange(event.target.value)}>
      {children}
    </input>
  );
});

export default CustomInput;
