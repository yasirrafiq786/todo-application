import React, {useState} from 'react';

const TodoItem = props => {
    

  return (
    <div>
      <div>{props.userId}</div>
      <div>{props.title}</div>
      <div>{props.completed}</div>
    </div>
  );
};

export default TodoItem;
