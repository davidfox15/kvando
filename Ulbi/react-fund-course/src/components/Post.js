import React from 'react';
import './Post.css';

export default function Post({ deletePostCallback, ...props }) {
  const { id, title, text } = props.post;
  return (
    <div className="Post">
      <h3 className="Post-Name">
        {id}. {title}
      </h3>
      <span className="Post-Text">{text}</span>
      <button className="Post-DeleteButton" onClick={() => deletePostCallback(props.post)}>
        delete
      </button>
    </div>
  );
}
