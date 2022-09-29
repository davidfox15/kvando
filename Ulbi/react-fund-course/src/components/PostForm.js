import React, { useState } from 'react';

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
    <div>
      <form>
        <input
          type="text"
          placeholder="Введите название"
          value={title}
          onChange={event => updateTitleInput(event.target.value)}
        />
        <input
          type="text"
          placeholder="Введите текст поста"
          value={text}
          onChange={event => updateTextInput(event.target.value)}
        />
        <button
          onClick={event => {
            event.preventDefault();
            addPost();
          }}
        >
          Добавить пост
        </button>
      </form>
    </div>
  );
}
