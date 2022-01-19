export default function Task({todo, CheckComplete}) {
    return (
      <div
      className="list-group"
      id="CheckComplete"
      style={todo.complete ? {textDecoration: "line-through"} : {textDecoration: "none"}}
      >
      <label className="list-group-item">
        <input
          onClick={() => {
            CheckComplete(todo.id);
          }}
          className="form-check-input me-1"
          type="checkbox" />
        {todo.title}<br />{todo.subtitle}
      </label>
    </div>
    )
  }