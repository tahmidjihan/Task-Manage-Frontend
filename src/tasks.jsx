import { useState } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState({
    'Todo': [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscins',
        description:
          'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Donec quis est. Aenean commodo ligula eget dolor.',
        dueDate: '2024-01-01',
      },
      {
        id: 2,
        title: 'Aliquam lorem ante dictumst et feugiat',
        description:
          'Ut tincidunt tincidunt erat. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Fusce condimentum quam eu massa. Aenean bibendum nunc. Pellentesque ornare laoreet nisl.',
        dueDate: '2023-07-10',
      },
      {
        id: 3,
        title: 'Duis leo ultricies gravida lorem erat',
        description:
          'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Nullam sagittis. Sed consequat, leo eget bibendum sodales.',
        dueDate: '2025-02-10',
      },
    ],
    'In progress': [
      {
        id: 4,
        title: 'Praesent blandit justo nec sollicitudin magna',
        description:
          'Suspendisse potenti. Vestibulum dapibus nunc ac augue. Curabitur ullamcorper ultricies nisi. Nam quam nunc, blandit vel. Donec felis purus, vestibulum non, gravida vitae, vehicula auctor, tortor.',
        dueDate: '2022-11-20',
      },
      {
        id: 5,
        title: 'Maecenas nec odio tincidunt risus id',
        description:
          'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Duis tincidunt. Curabitur ullamcorper ultricies nisi. Quisque aliquam eu augue. Curabitur feugiat vestibulum.',
        dueDate: '2023-12-17',
      },
      {
        id: 6,
        title: 'Etiam rhoncus velit ut bibendum massa',
        description:
          'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales. Vivamus in turpis risus. Pellentesque ut lacinia justo, at feugiat mi. Nulla egestas, magna sit amet sollicitudin.',
        dueDate: '2021-06-05',
      },
    ],
    'Done': [
      {
        id: 7,
        title: 'Phasellus viverra purus vitae sodales augue',
        description:
          'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero. Aenean faucibus, ante eget imperdiet luctus, ligula lectus laoreet arcu, ut malesuada urna dui a quam. Fusce augue.',
        dueDate: '2024-03-30',
      },
      {
        id: 8,
        title: 'Curabitur ligula suscipit lorem vel feugiat',
        description:
          'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Cras dapibus. Sed sit amet massa vel lorem fermentum tincidunt. Sed id felis nunc. Curabitur tincidunt augue ac massa.',
        dueDate: '2025-01-12',
      },
      {
        id: 9,
        title: 'Aenean vulputate ut magna vestibulum risus',
        description:
          'Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas, neque sit amet convallis pulvinar. Ut tristique tristique velit vel dignissim. Nullam mollis ipsum sit amet aliquam.',
        dueDate: '2023-09-22',
      },
    ],
  });

  return { tasks, setTasks };
};

export default useTasks;
