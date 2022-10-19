import { useState, useEffect } from 'react';

const UseEffect = () => {
  const [count, setCount] = useState(0);

  // triggered every time
  useEffect(() => {
    console.log('use effect triggered everytime ');
  });

  // triggered once
  useEffect(() => {
    console.log('use effect  triggered once ');
  }, []);

  // trigerred when stuff in [] changes
  useEffect(() => {
    console.log(`use effect when stuff in [] changes ${count}`);
  }, [count]);

  return (
    <div className='--center-all'>
      <h1>{count}</h1>
      <button
        className='--btn --btn-primary'
        onClick={() => setCount(count + 1)}
      >
        increment
      </button>
    </div>
  );
};

export default UseEffect;
