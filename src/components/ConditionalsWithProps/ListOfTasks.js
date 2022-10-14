import Task from './Task';

const ListOfTasks = () => {
  return (
    <div className='container'>
      <h1>List Of Tasks</h1>
      <ul className='--text-p --fw-bold'>
        <Task name='Task 1' isCompleted={true} />
        <Task name='Task 2' isCompleted={false} />
        <Task name='Task 3' isCompleted={true} />
      </ul>
    </div>
  );
};

export default ListOfTasks;
