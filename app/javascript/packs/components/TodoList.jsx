import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [items, setItems] = useState([]);

  return (
    <div>

      <TodoItem userId="User" title="Sample" completed="No" />

    </div>
  );
};

export default TodoList;
