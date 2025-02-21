import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Category from './components/Category';
import { DragDropContext } from '@hello-pangea/dnd';

function App() {
  const [count, setCount] = useState(0);

  const [tasks, setTasks] = useState({
    'Category 1': ['Task 1', 'Task 2', 'Task 3'],
    'Category 2': ['Task 4', 'Task 5', 'Task 6'],
    'Category 3': ['Task 7', 'Task 8', 'Task 9'],
  });
  function handleDragEnd(result) {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId === destination.droppableId) {
      const updatedTasks = [...tasks[source.droppableId]];
      const [movedTask] = updatedTasks.splice(source.index, 1);
      updatedTasks.splice(destination.index, 0, movedTask);

      setTasks((prev) => ({
        ...prev,
        [source.droppableId]: updatedTasks,
      }));
    } else {
      const sourceTasks = [...tasks[source.droppableId]];
      const destinationTasks = [...tasks[destination.droppableId]];
      const [movedTask] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, movedTask);

      setTasks((prev) => ({
        ...prev,
        [source.droppableId]: sourceTasks,
        [destination.droppableId]: destinationTasks,
      }));
    }
  }
  return (
    <>
      <div>
        <div className='bg-base-300 min-w-screen'>
          <h1 className='text-5xl font-bold text-center pt-20'>
            Tasks and Categories
          </h1>
          <div className='hero-content min-w-screen text-center z-10 py-20'>
            <DragDropContext onDragEnd={handleDragEnd}>
              <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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
