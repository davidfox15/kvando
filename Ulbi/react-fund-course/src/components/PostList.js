import React from 'react';
import Post from './Post';
import './PostList.css';

export default function PostList({ title, posts }) {
  return (
    <div>
      <h1 className="ListTitle">{title}</h1>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
