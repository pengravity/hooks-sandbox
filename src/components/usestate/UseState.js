import React, { useState } from 'react';

const UseState = () => {
  const [text, setText] = useState('Welcome to the jungle');

  const handleClick = () => {
    setText('changing text');

    console.log(text);
  };
  return (
    <div className='container --center-all'>
      <h1>{text}</h1>
      <button onClick={handleClick} className='--btn --btn-primary --btn-lg'>
        Change Text
      </button>
    </div>
  );
};

export default UseState;
