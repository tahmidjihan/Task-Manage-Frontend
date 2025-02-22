import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Category from './components/Category';
import { DragDropContext } from '@hello-pangea/dnd';
import useTasks from './tasks';

function App() {
  const [count, setCount] = useState(0);
  const { tasks, setTasks } = useTasks();

  function handleDragEnd(result) {
    if (!result.destination) return;

    const { source, destination } = result;
    const sourceCategory = source.droppableId;
    const destinationCategory = destination.droppableId;

    // Convert tasks object to an array to reorder
    const sourceTasksArray = Object.entries(tasks[sourceCategory]);
    const destinationTasksArray = Object.entries(tasks[destinationCategory]);

    const [movedTask] = sourceTasksArray.splice(source.index, 1); // Remove from source
    destinationTasksArray.splice(destination.index, 0, movedTask); // Insert into destination

    setTasks((prev) => ({
      ...prev,
      [sourceCategory]: Object.fromEntries(sourceTasksArray),
      [destinationCategory]: Object.fromEntries(destinationTasksArray),
    }));
  }

  // useEffect(() => {
  //   console.log(tasks);
  // }, [tasks]);
  return (
    <>
      <div>
        <div className='bg-base-300 min-w-screen'>
          <h1 className='text-5xl font-bold text-center pt-20'>
            Tasks and Categories
          </h1>
          <div className='hero-content min-w-screen text-center z-10 py-20'>
            <DragDropContext onDragEnd={handleDragEnd}>
              <div className=' flex flex-wrap mx-auto lg:px-12 justify-center gap-4 items-start'>
                {Object.keys(tasks).map((category) => (
                  <Category
                    key={category}
                    categoryTitle={category}
                    titles={tasks[category]}
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
