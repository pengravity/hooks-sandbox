import { useState, useEffect } from 'react';

const UseEffect = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);

    //cleanup effect, can also add [] dependency array
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  });

  return (
    <div className='--center-all'>
      <h1>UseEffect Cleanup</h1>
      <h2>Screen width: {width}</h2>
      <button className='--btn --btn-primary'>Button</button>
    </div>
  );
};

export default UseEffect;
