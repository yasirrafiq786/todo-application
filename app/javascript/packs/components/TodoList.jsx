import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
  const handleClick = () => {
    props.toggleCompletedTodoItems ();
  };

  const deleteItem = id => {
    props.deleteItem (id);
  };

  return (
    <React.Fragment>
      <hr />
      <button
        className="btn btn-outline-primary btn-block mb-3"
        onClick={handleClick}
      >
        {props.hideCompletedTodoItems
          ? `Show Completed Items`
          : `Hide Completed Items `}
      </button>
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
          {props.items.map (item => (
            <tbody key={item.id}>
              <TodoItem
                id={item.id}
                title={item.title}
                complete={item.complete}
                deleteItem={deleteItem}
                hideCompletedTodoItems={props.hideCompletedTodoItems}
              />
            </tbody>
          ))}
        </table>
      </div>
    </React.Fragment>
  );
};

export default TodoList;
