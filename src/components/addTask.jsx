import React from 'react';
import useTasks from '../tasks';

function AddTask({ className, text, isEdit }) {
  const { tasks, setTasks } = useTasks();
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className={className}
        onClick={() => document.getElementById('my_modal_5').showModal()}>
        {text}
      </button>
      <dialog id='my_modal_5' className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <section className='flex flex-col items-center pt-6'>
            <div className='w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700'>
              <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                  Create a Task
                </h1>
                <form
                  className='space-y-4 md:space-y-6'
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const dataObject = Object.fromEntries(formData);
                    const date = new Date().toISOString().slice(0, 10);
                    const done = dataObject.category == 'Done' ? true : false;
                    // console.log(done);
                    // console.log(date);
                    const title = dataObject.title;
                    // console.log(typeof dataObject.title);
                    const data = {
                      [title]: [done, dataObject.description, date],
                    };
                  }}>
                  <div>
                    <label
                      htmlFor='name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                      Task Title (50 characters)
                    </label>
                    <input
                      type='text'
                      name='title'
                      id='name'
                      onChange={(e) => {
                        // console.log(e.target.value);
                        if (e.target.value.split('').length > 50) {
                          e.target.value = e.target.value.slice(0, 50);
                          console.log('Limit Exceeded; limit is 50 characters');
                        }
                      }}
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='Task Title'
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='category'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                      category
                    </label>
                    <select
                      name='category'
                      id='category'
                      className='bg-gray-50 border select border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      required>
                      <option defaultValue value='Todo'>
                        Todo
                      </option>
                      <option value='In Progress'>In Progress</option>
                      <option value='Done'>Done</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor='description'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                      Description (200 characters)
                    </label>
                    <textarea
                      name='description'
                      rows={5}
                      onChange={(e) => {
                        if (e.target.value.split('').length > 200) {
                          e.target.value = e.target.value.slice(0, 200);
                          // console.log('Limit Exceeded; limit is 200 characters');
                        }
                      }}
                      id='description'
                      placeholder='Your description here'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      required></textarea>
                  </div>
                  <button type='submit' className='w-full btn btn-primary'>
                    Create Task
                  </button>
                </form>
              </div>
            </div>
          </section>

          <div className='modal-action'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button className='btn'>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default AddTask;
