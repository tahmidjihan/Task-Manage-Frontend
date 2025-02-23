import React, { useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import useTasks from '../tasks';
import { FaBars } from 'react-icons/fa';
import AddTask from './addTask';
import axios from 'axios';

function Category({ categoryTitle, className }) {
  const { tasks, setTasks, refetch } = useTasks();

  // useEffect(() => {
  //   console.log('Tasks updated:', tasks);
  // }, [tasks]);

  // You can use a separate Task component, but I'm just rendering it directly here.
  return (
    <div className={`card bg-base-100 w-xs shadow-sm ${className}`}>
      <div className='card-body border-t-8 border-primary rounded-xl'>
        <div className='flex justify-between'>
          <h2 className='card-title'>{categoryTitle}</h2>
          <div>
            <AddTask
              text='Add Task'
              isEdit={false}
              category={categoryTitle}
              className='btn btn-primary btn-xs'>
              Add Task
            </AddTask>
          </div>
        </div>
        <hr />
        <Droppable droppableId={categoryTitle} key={categoryTitle}>
          {(provided) => (
            <fieldset
              className='p-4 bg-base-100 border border-base-300 rounded-box w-64'
              ref={provided.innerRef}
              {...provided.droppableProps}>
              <legend className='fieldset-legend'>Tasks</legend>
              {tasks[categoryTitle]?.map((task, index) => (
                <Draggable key={task.id} draggableId={task._id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className='bg-base-200 p-2 my-2 rounded-sm relative'>
                      <div>
                        <div className='flex gap-2 flex-wrap'>
                          <AddTask
                            text='Edit'
                            title={task}
                            description={task.description}
                            category={categoryTitle}
                            // _id={task.id}
                            isEdit
                            className='btn btn-primary btn-xs'>
                            Edit
                          </AddTask>
                          <button
                            onClick={() => {
                              axios
                                .delete(
                                  `https://backend14.vercel.app/DELETE/tasks/${task._id}`
                                )
                                .then(() => {
                                  refetch();
                                });
                            }}
                            className='btn btn-error btn-xs'>
                            Delete
                          </button>
                        </div>
                      </div>
                      <label className='fieldset-label text-start text-xs my-2 text-white'>
                        {task.title} {/* Use the task's title property */}
                      </label>
                      <hr />
                      <p className='text-xs text-start my-[2px] text-gray-500'>
                        {task.description} {/* Use the task's description */}
                      </p>

                      {/* You can also include other task properties here, e.g., task.dueDate */}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </fieldset>
          )}
        </Droppable>
      </div>
    </div>
  );
}

export default Category;
