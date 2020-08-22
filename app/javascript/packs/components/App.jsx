import React,{useState, useEffect} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import itemsList from '../apis/itemsList';

const App = () => {
  const [items, setItems] = useState ([]);

  useEffect (() => {
    const fetchItems =  async() => {
    const response = await itemsList.get ('/todo_items');
    setItems (response.data);
  };
  fetchItems();
  }, items);

  const createTodoItem =(todoItem) => {
    const items = [...items, todoItem];
    console.log(items)
    setItems(items)
  };
  
  return (
    <React.Fragment>
      
      <TodoForm createTodoItem={createTodoItem} />
      <TodoList items={items} />
      
    </React.Fragment>
  );
};

export default App;
