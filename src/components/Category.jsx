import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import useTasks from '../tasks';
import { FaBars } from 'react-icons/fa';
import AddTask from './addTask';

function Category({ categoryTitle, titles }) {
  const { tasks, setTasks } = useTasks();
  // console.log(titles);
  function Task({ title, provided }) {
    return (
      <label
        className='fieldset-label bg-base-200 rounded-sm p-2'
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}>
        <input type='checkbox' className='checkbox' />
        {title}
      </label>
    );
  }
  return (
    <div className='card bg-base-100 w-xs shadow-sm'>
      <div className='card-body border-t-8 border-primary rounded-xl'>
        <div className='flex justify-between'>
          <h2 className='card-title'>{categoryTitle}</h2>
          <AddTask
            text='Add Task'
            isEdit={false}
            className='btn btn-primary btn-xs'>
            Add Task
          </AddTask>
        </div>
        <hr />
        <Droppable droppableId={categoryTitle}>
          {(provided) => (
            <fieldset
              className=' p-4 bg-base-100 border border-base-300 rounded-box w-64'
              ref={provided.innerRef}
              {...provided.droppableProps}>
              <legend className='fieldset-legend'>Tasks</legend>
              {Object.keys(titles).map((title, index) => (
                <Draggable key={title} draggableId={title} index={index}>
                  {(provided) => (
                    <div
                      key={provided}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className='bg-base-200 p-2 my-2 rounded-sm relative'>
                      <div>
                        <div className='flex gap-2 flex-wrap'>
                          <AddTask
                            text='Edit'
                            isEdit
                            className='btn btn-primary btn-xs'>
                            Edit
                          </AddTask>
                          <button className='btn btn-error btn-xs'>
                            Delete
                          </button>
                        </div>
                      </div>
                      <label className='fieldset-label text-start text-xs my-2 text-white'>
                        {title}
                      </label>
                      <hr />
                      <p className='text-xs text-start my-[2px] text-gray-500'>
                        {titles[title][0]}
                      </p>

                      <p className='rounded-full text-start text-xs badge badge-xs badge-primary w-full my-2 badge-outline'>
                        Created : {titles[title][1]}
                      </p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </fieldset>
          )}
        </Droppable>
        <DragDropContext></DragDropContext>
      </div>
    </div>
  );
}

export default Category;
