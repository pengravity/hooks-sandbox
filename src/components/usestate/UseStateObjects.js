import { useState } from 'react';

const UseStateObjects = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    job: 'Web dev',
    company: 'Google',
  });

  const updateCompany = () => {
    setProfile({ ...profile, company: 'Microsoft' });
  };

  const { name, job, company } = profile;
  return (
    <div>
      <h1 className='--text-center --my2'>useState in objects</h1>
      <div className='--card --mx2'>
        <h2>Name: {name}</h2>
        <h4>Job: {job}</h4>
        <h4>Company: {company}</h4>
      </div>
      <div className='--center-all --my2'>
        <button onClick={updateCompany} className='--btn --btn-primary'>
          Change company
        </button>
      </div>
    </div>
  );
};

export default UseStateObjects;
