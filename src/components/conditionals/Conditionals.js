import { useState } from 'react';

const Conditionals = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let message;

  if (isLoggedIn) {
    message = 'welcome, Joe';
  } else {
    message = 'welcome, guest';
  }

  const login = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className='container'>
      <div className='--text-center --my2 '>
        <h1> {message}</h1>
        <button onClick={login} className='--btn --btn-primary '>
          Login
        </button>
      </div>
    </div>
  );
};

export default Conditionals;
