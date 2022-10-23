import { useState } from 'react';

import UserList from './UserList';
import { userData } from './data';
import UserContext from '../../context/userContext';

const UserApp = () => {
  const [users, setUsers] = useState(userData);

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <UserContext.Provider value={{ users, deleteUser }}>
      <div className='--flex-center'>
        <div className='--width-500px --my --p'>
          <h2>Props drilling</h2>
          <UserList />
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default UserApp;
