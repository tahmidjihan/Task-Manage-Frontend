import { useContext, useEffect, useState } from 'react';
import Category from './components/Category';
import { DragDropContext } from '@hello-pangea/dnd';
import useTasks from './tasks';
import { authContext } from './AuthProvider';
import { useNavigate } from 'react-router';
import axios from 'axios';

function App() {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const { tasks, refetch } = useTasks();

  function handleDragEnd(result) {
    // If dropped outside of a droppable area, return early
    if (!result.destination) return;
    const newTasks = { ...tasks };
    const { source, destination } = result;
    const sourceCategory = source.droppableId;
    const destinationCategory = destination.droppableId;
    console.log(result);
    console.log(sourceCategory, destinationCategory);
    console.log(result.source.index, result.destination.index);
    const index = result.source.index;
    // console.log(index);
    const newTask = {
      ...tasks[sourceCategory][index],
      category: destinationCategory,
    };
    delete newTask._id;
    const id = tasks[sourceCategory][index]._id;
    if (tasks[sourceCategory][index] !== newTask) {
      console.log(newTask);
      axios
        .put(`https://backend14.vercel.app/PUT/tasks/${id}`, newTask)
        .then(() => refetch());
    }
  }

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  useEffect(() => {
    if (user == null) navigate('/');
  }, [user]);

  return (
    <>
      <div>
        <div className='bg-base-300 min-w-screen'>
          <h1 className='text-5xl font-bold text-center pt-20'>
            Tasks and Categories
          </h1>
          <div className='hero-content min-w-screen text-center z-10 py-20 flex flex-col items-center justify-center mx-auto container'>
            <DragDropContext onDragEnd={handleDragEnd}>
              <div className=' flex flex-wrap gap-4 items-center justify-center'>
                {Object?.keys(tasks).map((category) => (
                  <Category
                    className='mx-auto sm:mx-0'
                    key={category}
                    categoryTitle={category}
                    tasks={tasks[category]}
                  />
                ))}
              </div>
            </DragDropContext>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
