import React from 'react';
import './Post.css';

export default function Post({ deletePostCallback, ...props }) {
  const { id, name, text } = props.post;
  return (
    <div className="Post">
      <h3 className="Post-Name">
        {id}. {name}
      </h3>
      <span className="Post-Text">{text}</span>
      <button className="Post-DeleteButton" onClick={() => deletePostCallback(props.post)}>
        delete
      </button>
    </div>
  );
}
