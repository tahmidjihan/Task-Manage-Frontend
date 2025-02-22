import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { authContext } from './AuthProvider';

const useTasks = () => {
  const [tasks, setTasks] = useState({
    Todo: [],
    InProgress: [],
    Done: [],
  });
  const { user } = useContext(authContext);

  useEffect(() => {
    if (!user?.email) return; // Prevents running without a user

    const fetchTasks = async () => {
      try {
        const res = await axios.get(
          `https://backend14.vercel.app/GET/tasks?email=${user.email}`
        );
        const rawData = res.data;

        // Organizing tasks by category
        const sortedTasks = rawData.reduce((acc, task) => {
          if (!acc[task.category]) acc[task.category] = [];
          acc[task.category].push(task);
          return acc;
        }, {});

        setTasks(sortedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [user?.email]);

  return { tasks, setTasks };
};

export default useTasks;
