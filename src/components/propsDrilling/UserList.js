import { useContext } from 'react';
import UserContext from '../../context/userContext';
import User from './User';

const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      {users.map((user) => {
        return (
          <div className='--card --p --my2 --bg-primary' key={user.id}>
            <User {...user} />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
