import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import useTasks from '../tasks';

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
        <h2 className='card-title'>{categoryTitle}</h2>
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
                      <p
                        className={`text-xs text-start ${
                          titles[title][3] === 'done'
                            ? 'text-success'
                            : titles[title][3] === 'progress'
                            ? 'text-warning'
                            : 'text-error'
                        } rounded-sm pt-2`}>
                        In {titles[title][3]}
                      </p>
                      <label className='fieldset-label text-start'>
                        <input
                          type='checkbox'
                          className='checkbox'
                          onChange={(e) => {
                            if (e.target.checked) {
                              titles[title][0] = true;
                              titles[title][1];
                              titles[title][2];
                              titles[title][3] = 'done';
                              setTasks((prevTasks) => ({
                                ...prevTasks,
                                [categoryTitle]: {
                                  ...prevTasks[categoryTitle],
                                  [title]: [
                                    true,
                                    ...titles[title][1],
                                    ...titles[title][2],
                                    'done',
                                  ],
                                },
                              }));
                              // console.log(titles[title]);
                            } else {
                              titles[title][0] = false;
                              titles[title][1];
                              titles[title][2];
                              titles[title][3] = 'todo';
                              setTasks((prevTasks) => ({
                                ...prevTasks,
                                [categoryTitle]: {
                                  ...prevTasks[categoryTitle],
                                  [title]: [
                                    false,
                                    ...titles[title][1],
                                    ...titles[title][2],
                                    'todo',
                                  ],
                                },
                              }));
                              // console.log(titles[title]);
                            }
                          }}
                          {...(titles[title][0]
                            ? { defaultChecked: true }
                            : {})}
                        />

                        {title}
                      </label>

                      <p className='text-xs text-start my-[2px]'>
                        {titles[title][1]}
                      </p>

                      <p className='rounded-full text-start text-xs badge badge-xs badge-accent badge-outline'>
                        {titles[title][2]}
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
