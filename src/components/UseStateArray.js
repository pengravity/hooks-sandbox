import React from 'react';
import { useState } from 'react';
import { peopleData } from '../people-data';
import { BiTrash } from 'react-icons/bi';

const UseStateArray = () => {
  const [people, setPeople] = useState(peopleData);

  const RemovePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <section className='--flex-center --vh --bg-primary'>
      <div className='container'>
        <h1>Use state in array</h1>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id} className='--flex-between --bg-light  --my --card'>
              <h2>{name}</h2>
              <BiTrash color='red' size={30} onClick={() => RemovePerson(id)} />
            </div>
          );
        })}
        <button onClick={() => setPeople([])} className='--btn --btn-danger'>
          Clear All
        </button>
      </div>
    </section>
  );
};

export default UseStateArray;
