import React from 'react';
import './ErrorBox.css';

const ErrorBox = props => {
  const errorMessage = props.errorMessage;
  return <div className="ErrorBox">{errorMessage}</div>;
};

export default ErrorBox;
