import React, {useState, useEffect} from 'react';
import TodoItem from './TodoItem';
import itemsList from '../apis/itemsList';

const TodoList = () => {
  const [items, setItems] = useState ([]);

  useEffect (async () => {
    const response = await itemsList.get ('/todo_items');
    setItems (response.data);
  }, []);

  return (
    <React.Fragment>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Status</th>
              <th scope="col">Item</th>
              <th scope="col" className="text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map (item => (
              <TodoItem
                key={item.id}
                title={item.title}
                complete={item.complete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default TodoList;
