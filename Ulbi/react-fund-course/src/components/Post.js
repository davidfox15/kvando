import React from 'react';
import './Post.css';
import CustomButton from './UI/button/CustomButton';

export default function Post({ deletePostCallback, ...props }) {
  const { id, title, text } = props.post;
  return (
    <div className="Post">
      <h3 className="Post-Name">
        {id}. {title}
      </h3>
      <span className="Post-Text">{text}</span>
      <CustomButton className="Post-DeleteButton" onClick={() => deletePostCallback(props.post)}>
        delete
      </CustomButton>
    </div>
  );
}
