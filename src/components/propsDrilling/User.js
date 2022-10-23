const User = ({ id, name, deleteUser }) => {
  return (
    <div className='--flex-between'>
      <h3 className='--text-light'>{name}</h3>
      <button onClick={() => deleteUser(id)} className='--btn --btn-danger'>
        Delete
      </button>
    </div>
  );
};

export default User;
