import { useState } from 'react';

// logical and && operator
const Conditionals3 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className='container'>
      <div className='--text-center --my2 --p2'>
        {isLoggedIn ? <h1>Welcome Joe</h1> : <h1>Welcome Guest</h1>}

        <div className='--inline-block --p2 --my2'>
          <button onClick={login} className='--btn --btn-primary '>
            Login
          </button>
          <button onClick={logout} className='--btn  '>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Conditionals3;
