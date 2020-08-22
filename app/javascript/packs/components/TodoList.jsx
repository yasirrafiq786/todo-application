import React, {useState, useEffect} from 'react';
import TodoItem from './TodoItem';
import itemsList from '../apis/itemsList';

const TodoList = () => {
  const [items, setItems] = useState ([]);

  useEffect (async () => {
    const response = await itemsList.get ("/todo_items");
    setItems(response.data);
  }, []);

  return (
    <div>

      <TodoItem userId="User" title="Sample" completed="No" />

    </div>
  );
};

export default TodoList;
