import { useContext, useEffect, useState } from 'react';
import Category from './components/Category';
import { DragDropContext } from '@hello-pangea/dnd';
import useTasks from './tasks';
import { authContext } from './AuthProvider';

function App() {
  const { user } = useContext(authContext);
  const { tasks, setTasks } = useTasks();
  const [dummyState, setDummyState] = useState(false);

  function handleDragEnd(result) {
    // If dropped outside of a droppable area, return early
    if (!result.destination) return;

    const { source, destination } = result;
    const sourceCategory = source.droppableId; // Category where the task is coming from
    const destinationCategory = destination.droppableId; // Category where the task is being dropped

    // Clone the tasks arrays to avoid direct mutation
    const sourceTasks = [...tasks[sourceCategory]]; // Copy tasks from the source category
    const destinationTasks = [...tasks[destinationCategory]]; // Copy tasks from the destination category

    // Remove the task from the source array
    const [movedTask] = sourceTasks.splice(source.index, 1);

    // Add the task to the destination category (or reorder within the same category)
    if (sourceCategory !== destinationCategory) {
      // Move task to the new category
      destinationTasks.splice(destination.index, 0, movedTask);
    } else {
      // Reorder tasks within the same category
      sourceTasks.splice(destination.index, 0, movedTask);
    }
    setDummyState((prev) => !prev);

    // Update the state to trigger re-render with the modified tasks
    setTasks((prevTasks) => ({
      ...prevTasks,
      [sourceCategory]:
        sourceCategory !== destinationCategory ? sourceTasks : [...sourceTasks],
      [destinationCategory]:
        destinationCategory !== sourceCategory
          ? destinationTasks
          : [...destinationTasks],
    }));
  }

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

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
