import { useState, useReducer } from 'react';

import { countReducer } from './countReducer';

// dispatch - replaces setCount() and tells the reducer function what to do

// payload - send some info to the reducer function

const initialState = {
  count: 0,
};

const UseReducerBasics = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const handleAdd = () => {
    dispatch({
      type: 'ADD',
    });
  };

  const handleSubtract = () => {
    dispatch({
      type: 'SUBTRACT',
    });
  };

  const handleReset = () => {
    dispatch({
      type: 'RESET',
    });
  };

  return (
    <section className='--flex-center --100vh --bg-primary'>
      <div className='container --center-all --bg-light --p2 --m2'>
        <h3>Counter</h3>
        <h1 className='count'>{state.count}</h1>
        <div className='buttons --flex-center'>
          <button
            onClick={handleSubtract}
            className='substract --btn --btn-danger'
          >
            Subtract
          </button>
          <button onClick={handleReset} className='substract --btn '>
            Reset
          </button>
          <button onClick={handleAdd} className='substract --btn --btn-primary'>
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseReducerBasics;
