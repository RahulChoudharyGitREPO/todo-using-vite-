import { useState } from 'react';
import './App.css';

function App() {
  const [title, settital] = useState('');
  const [desc, setdesc] = useState('');
  const [main, setmain] = useState([]); 

  const submithandler = (e) => {
    e.preventDefault();

    setmain([...main, { title, desc }]);
    settital('');
    setdesc('');
  };
  const deleteTask = (index) => {
    const updatedTasks = [...main];
    updatedTasks.splice(index, 1);
    setmain(updatedTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...main];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setmain(updatedTasks);
  };

  let renderTask = <h3>No Task Here</h3>;
  renderTask = main.map((t, i) => {
    return (
      <div key={i} className='flex justify-between'>
        <div>
          <h3 className={`m-4 ${t.completed ? 'line-through' : ''}`}>
            {t.title}
          </h3>
          <h3 className={`m-4 ${t.completed ? 'line-through' : ''}`}>
            {t.desc}
          </h3>
        </div>
        <div>
          <button
            className='p-3 m-4 bg-blue-500 rounded'
            onClick={() => toggleTask(i)}
          >
            Completed
          </button>
          <button
            className='p-3 m-4 bg-red-500 rounded'
            onClick={() => deleteTask(i)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <h1 className='mb-10 text-4xl text-center'>Todo List</h1>
      <form className='flex justify-evenly' onSubmit={submithandler}>
        <input
          type='text'
          className='border-2 border-zinc-900'
          placeholder='Enter Task Here'
          value={title}
          onChange={(e) => {
            settital(e.target.value);
          }}
        />

        <input
          type='text'
          className='border-2 border-zinc-900'
          placeholder='Enter Description Here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button className='p-4 bg-blue-500 rounded-md'>Add Task</button>
      </form>
      <div className='p-8 mt-5 bg-slate-300'>
        <ul>
          <li>{renderTask}</li></ul>
      </div>
    </>
  );
}

export default App;
