import React, {useState, useRef} from 'react';
import itemsList from '../apis/itemsList';
import _ from 'lodash';

const TodoItem = props => {
  const inputRef = useRef ();
  const completedRef = useRef ();
  const [done, setDone] = useState (props.complete);

  const path = `/todo_items/${props.id}`;
  const handleDestroy = () => {
    const confirmed = confirm ('Are you sure?');
    if (confirmed) {
      itemsList.delete (path).then (response => {
        props.deleteItem (props.id);
      });
    }
  };

  const handleChange = () => {
    update ();
  };

  const update = _.debounce (() => {
    setDone (completedRef.current.checked);
    itemsList
      .patch (path, {
        todo_item: {
          title: inputRef.current.value,
          complete: completedRef.current.checked,
        },
      })
      .then (response => {});
  }, 1000);

  return (
    <tr
      className={`${done && props.hideCompletedTodoItems ? 'd-none' : ''} ${done ? 'table-light' : ''}`}
    >
      <td>
        <svg
          className={`bi bi-check-circle ${done ? `text-success` : `text-muted`}`}
          width="2em"
          height="2em"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M17.354 4.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L10 11.293l6.646-6.647a.5.5 0 01.708 0z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M10 4.5a5.5 5.5 0 105.5 5.5.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 0010 4.5z"
            clipRule="evenodd"
          />
        </svg>
      </td>
      <td>
        <input
          type="text"
          defaultValue={props.title}
          disabled={done}
          ref={inputRef}
          onChange={handleChange}
          className="form-control"
          id={`todoItem__title-${props.id}`}
        />
      </td>
      <td className="text-right">
        <div className="form-check form-check-inline">
          <input
            type="boolean"
            defaultChecked={done}
            ref={completedRef}
            onChange={handleChange}
            type="checkbox"
            className="form-check-input"
            id={`complete-${props.id}`}
          />
          <label className="form-check-label" htmlFor={`complete-${props.id}`}>
            Complete?
          </label>
        </div>
        <button onClick={handleDestroy} className="btn btn-outline-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
