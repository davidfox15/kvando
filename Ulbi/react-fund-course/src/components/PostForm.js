import React, { useState } from 'react';
import CustomButton from './UI/button/CustomButton';
import CustomInput from './UI/input/CustomInput';
import ErrorBox from './ErrorBox';
import './PostForm.css';

export default function PostForm({ addPost }) {
  const [post, setPost] = useState({
    title: '',
    text: '',
  });
  const [inputError, setInputError] = useState('');

  function checkValidInput(...inputs) {
    const re = /^\S+(\w|\s)*\S$/;
    return inputs.every(input => re.exec(input) && re.exec(input));
  }

  function createPost(event) {
    event.preventDefault();
    setInputError('');
    if (checkValidInput(post.title, post.text)) addPost(post);
    else setInputError('Invalid Input');

    setPost({
      title: '',
      text: '',
    });
  }

  return (
    <form className="PostForm">
      <CustomInput
        type="text"
        placeholder="Введите название"
        value={post.title}
        onChange={inputValue => setPost({ ...post, title: inputValue })}
      />
      <CustomInput
        type="text"
        placeholder="Введите текст поста"
        value={post.text}
        onChange={inputValue => setPost({ ...post, text: inputValue })}
      />
      <CustomButton onClick={event => createPost(event)}>Добавить пост</CustomButton>
      {inputError && <ErrorBox errorMessage={inputError} />}
    </form>
  );
}
