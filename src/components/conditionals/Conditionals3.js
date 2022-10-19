import { useState } from 'react';

// Ternary operator
const Conditionals3 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className='container'>
      <div className={isLoggedIn ? 'orange' : ''}>
        <div className='--text-center --my2 --p2'>
          {isLoggedIn ? <h1>Welcome Joe</h1> : <h1>Welcome Guest</h1>}

          <div className=' --p2 --my2 --center-all'>
            <button onClick={login} className='--btn --btn-primary '>
              Login
            </button>
            <button onClick={logout} className='--btn  '>
              Logout
            </button>
            <button onClick={toggleLogin} className='--btn --btn-danger  '>
              Toggle {isLoggedIn ? 'logout' : 'login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conditionals3;
