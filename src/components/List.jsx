const List = (props) => {
  return (
    <div key={props.id}>
      <li className="todo-li">
        <button
          className="todo-delete-button"
          id={props.id}
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          X
        </button>
        {props.value}
      </li>
    </div>
  );
};
export default List;
