import { useState } from 'react';

import UserList from './UserList';
import { userData } from './data';

const UserApp = () => {
  const [users, setUsers] = useState(userData);

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div className='--flex-center'>
      <div className='--width-500px --my --p'>
        <h2>Props drilling</h2>
        <UserList users={users} deleteUser={deleteUser} />
      </div>
    </div>
  );
};

export default UserApp;
