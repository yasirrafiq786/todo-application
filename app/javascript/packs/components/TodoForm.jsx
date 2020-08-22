import React, {useRef} from 'react';
import itemsList from '../apis/itemsList';

const TodoForm = props => {
  const titleRef = useRef ();

  const handleSubmit = e => {
    e.preventDefault ();
    itemsList
      .post ('/todo_items', {
        todo_item: {
          title: titleRef.current.value,
          complete: false,
        },
      })
      .then (response => {
        props.createTodoItem (response.data);
      })
      .catch (error => console.log (error));
    e.target.reset ();
  };

  return (
    <form onSubmit={handleSubmit} className="my-3">
      <div className="form-row">
        <div className="form-group col-md-8">
          <input
            type="text"
            name="title"
            ref={titleRef}
            required
            className="form-control"
            id="title"
            placeholder="Write your todo item here..."
          />
        </div>
        <div className="form-group col-md-4">
          <button className="btn btn-outline-success btn-block">
            Add To Do Item
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
