import React from 'react';
import './Post.css';

export default function Post(props) {
  const { id, name, text } = props.post;
  return (
    <div className="Post">
      <h3 className="Post-Name">
        {id}. {name}
      </h3>
      <span className="Post-Text">{text}</span>
    </div>
  );
}
