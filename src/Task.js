export default function Task({todo, strikethrough}) {
    return (
      <div
      className="list-group"
      id="strikeThrough"
      style={todo.complete ? {textDecoration: "line-through"} : {textDecoration: "none"}}
      >
      <label className="list-group-item">
        <input
          onClick={() => {
            strikethrough(todo.id);
          }}
          className="form-check-input me-1"
          type="checkbox" />
        {todo.title}<br />{todo.subtitle}
      </label>
    </div>
    )
  }