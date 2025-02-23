import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { authContext } from './AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useTasks = () => {
  const [tasks, setTasks] = useState({
    'Todo': [],
    'In Progress': [],
    'Done': [],
  });
  const { user } = useContext(authContext);
  const { data, refetch } = useQuery({
    queryKey: ['tasks', user?.email],

    queryFn: async () => {
      try {
        if (!user?.email) return [];
        const res = await axios.get(
          `https://backend14.vercel.app/GET/tasks?email=${user?.email}`
        );
        const rawData = res.data;

        const sortedTasks = rawData.reduce(
          (acc, task) => {
            if (!acc[task.category]) acc[task.category] = [];
            acc[task.category].push(task);
            return acc;
          },
          { 'Todo': [], 'In Progress': [], 'Done': [] }
        );
        return sortedTasks;
      } catch (error) {
        console.error('Error fetching tasks:', error);
        return [];
      }
    },
    enabled: Boolean(user?.email),
  });
  useEffect(() => {
    if (data) {
      setTasks(data);
    }
  }, [data]);

  return { tasks, setTasks, refetch };
};

export default useTasks;
