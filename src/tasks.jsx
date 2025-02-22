import { useState } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState({
    'Category A': {
      'Lorem ipsum dolor sit amet, consectetuer adipiscins': [
        false,
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Donec quis est. Aenean commodo ligula eget dolor.',
        '2024-01-01',
        'todo',
      ],
      'Aliquam lorem ante dictumst et feugiat': [
        true,
        'Ut tincidunt tincidunt erat. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Fusce condimentum quam eu massa. Aenean bibendum nunc. Pellentesque ornare laoreet nisl.',
        '2023-07-10',
        'done',
      ],
      'Duis leo ultricies gravida lorem erat': [
        false,
        'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Nullam sagittis. Sed consequat, leo eget bibendum sodales.',
        '2025-02-10',
        'progress',
      ],
    },
    'Category B': {
      'Praesent blandit justo nec sollicitudin magna': [
        true,
        'Suspendisse potenti. Vestibulum dapibus nunc ac augue. Curabitur ullamcorper ultricies nisi. Nam quam nunc, blandit vel. Donec felis purus, vestibulum non, gravida vitae, vehicula auctor, tortor.',
        '2022-11-20',
        'done',
      ],
      'Maecenas nec odio tincidunt risus id': [
        false,
        'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Duis tincidunt. Curabitur ullamcorper ultricies nisi. Quisque aliquam eu augue. Curabitur feugiat vestibulum.',
        '2023-12-17',
        'progress',
      ],
      'Etiam rhoncus velit ut bibendum massa': [
        false,
        'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales. Vivamus in turpis risus. Pellentesque ut lacinia justo, at feugiat mi. Nulla egestas, magna sit amet sollicitudin.',
        '2021-06-05',
        'todo',
      ],
    },
    'Category C': {
      'Phasellus viverra purus vitae sodales augue': [
        true,
        'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero. Aenean faucibus, ante eget imperdiet luctus, ligula lectus laoreet arcu, ut malesuada urna dui a quam. Fusce augue.',
        '2024-03-30',
        'done',
      ],
      'Curabitur ligula suscipit lorem vel feugiat': [
        false,
        'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Cras dapibus. Sed sit amet massa vel lorem fermentum tincidunt. Sed id felis nunc. Curabitur tincidunt augue ac massa.',
        '2025-01-12',
        'todo',
      ],
      'Aenean vulputate ut magna vestibulum risus': [
        false,
        'Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas, neque sit amet convallis pulvinar. Ut tristique tristique velit vel dignissim. Nullam mollis ipsum sit amet aliquam.',
        '2023-09-22',
        'progress',
      ],
    },
  });

  return { tasks, setTasks };
};

export default useTasks;
