import React, { useState } from 'react';
import CustomButton from './UI/button/CustomButton';
import CustomInput from './UI/input/CustomInput';
import './PostForm.css';

export default function PostForm(props) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  function updateTitleInput(inputValue) {
    setTitle(inputValue);
  }

  function updateTextInput(inputValue) {
    setText(inputValue);
  }

  function addPost() {
    const post = {
      title: title,
      text: text,
    };
    props.addPostCallback(post);
  }

  return (
    <form className="PostForm">
      <CustomInput
        type="text"
        placeholder="Введите название"
        value={title}
        onChange={event => updateTitleInput(event.target.value)}
      />
      <CustomInput
        type="text"
        placeholder="Введите текст поста"
        value={text}
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
    </form>
  );
}
