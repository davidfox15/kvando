import React, { useState } from 'react';
import CustomButton from './UI/button/CustomButton';
import CustomInput from './UI/input/CustomInput';
import ErrorBox from './ErrorBox';
import './PostForm.css';

export default function PostForm(props) {
  const [post, setPost] = useState({
    title: '',
    text: '',
  });
  const [inputError, setInputError] = useState('');

  function updateTitleInput(inputValue) {
    setPost({ ...post, title: inputValue });
  }

  function updateTextInput(inputValue) {
    setPost({ ...post, text: inputValue });
  }

  function checkValidInput() {
    const re = /^\S+(\w|\s)*\S$/;

    if (re.exec(post.title) && re.exec(post.text)) return true;
    return false;
  }

  function addPost() {
    setInputError('');
    if (checkValidInput()) {
      props.addPostCallback(post);
      setPost({
        title: '',
        text: '',
      });
    } else {
      setInputError('Invalid Input');
    }
  }

  return (
    <form className="PostForm">
      <CustomInput
        type="text"
        placeholder="Введите название"
        value={post.title}
        onChange={event => updateTitleInput(event.target.value)}
      />
      <CustomInput
        type="text"
        placeholder="Введите текст поста"
        value={post.text}
        onChange={event => updateTextInput(event.target.value)}
      />
      <CustomButton
        onClick={event => {
          event.preventDefault();
          addPost();
        }}
      >
        Добавить пост
      </CustomButton>
      {inputError && <ErrorBox errorMessage={inputError} />}
    </form>
  );
}
