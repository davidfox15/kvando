import React from 'react';
import Post from './Post';
import './PostList.css';

export default function PostList({ title, posts, deletePostCallback }) {
  return (
    <div>
      <h1 className="ListTitle">{title}</h1>
      {posts.map(post => (
        <Post deletePostCallback={deletePostCallback} key={post.id} post={post} />
      ))}
    </div>
  );
}
