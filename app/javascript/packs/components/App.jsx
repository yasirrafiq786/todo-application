import React, {useState, useEffect} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import itemsList from '../apis/itemsList';
import _ from 'lodash';

const App = () => {
  const [items, setItems] = useState ([]);

  useEffect (() => {
    const fetchItems = async () => {
      const response = await itemsList.get ('/todo_items');
      setItems (response.data);
    };
    fetchItems ();
  }, []);

  const createTodoItem = todoItem => {
    const updatedArray = [todoItem, ...items];
    setItems (updatedArray);
  };

  const deleteItem = id => {
    const updatedArray = _.reject (items, function (item) {
      return item.id === id;
    });
    setItems (updatedArray);
  };

  return (
    <React.Fragment>

      <TodoForm createTodoItem={createTodoItem} />
      <TodoList items={items} deleteItem={deleteItem} />

    </React.Fragment>
  );
};

export default App;
