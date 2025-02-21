import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

function Category({ categoryTitle, titles }) {
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
      <div className='card-body'>
        <h2 className='card-title'>Category title!</h2>
        <hr />
        <p className='text-sm text-start'>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <hr />
        <Droppable droppableId={categoryTitle}>
          {(provided) => (
            <fieldset
              className=' p-4 bg-base-100 border border-base-300 rounded-box w-64'
              ref={provided.innerRef}
              {...provided.droppableProps}>
              <legend className='fieldset-legend'>Tasks</legend>
              {titles.map((title, index) => (
                <Draggable key={title} draggableId={title} index={index}>
                  {(provided) => (
                    <label
                      key={provided}
                      className='fieldset-label bg-base-200 rounded-sm p-2'
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <input type='checkbox' className='checkbox' />
                      {title}
                    </label>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </fieldset>
          )}
        </Droppable>
        <DragDropContext></DragDropContext>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Category;
