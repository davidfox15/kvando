import React from 'react';
import { useState } from 'react';

export default function Counter() {
  let [likes, setLikes] = useState(0);
  let [value, setValue] = useState(10);

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }

  function incrementValue() {
    setLikes(likes + value);
  }

  return (
    <div>
      <h1>{likes}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <input
        type="number"
        value={value}
        onChange={event => {
          setValue(+event.target.value);
        }}
      />
      <button onClick={incrementValue}>Increment Value</button>
    </div>
  );
}
