import { useState } from "react";
import List from "./List";
const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputData, setInput] = useState("");
  const inputChangeEvent = (event) => {
    setInput(event.target.value);
  };
  const buttonClick = (event) => {
    setTodoList((oldData) => {
      return [...oldData, inputData];
    });
    setInput("");
  };
  const deleteItem = (props.i) => {
    console.log(id);
    //console.log(event.target.parentElement.parentElement);
    //event.target.parentElement.parentElement.remove();
  };

  return (
    <div className="App">
      <h2 className="header">ToDo-List</h2>
      <div className="input-div">
        <input
          type="text"
          value={inputData}
          onChange={inputChangeEvent}
          className="input-field"
          placeholder="Add a item"
          name=""
          id=""
        />
        <button className="button" onClick={buttonClick}>
          +
        </button>
      </div>
      <div className="todo-list-div">
        <ol>
          {todoList.map((value, index) => {
            return <List key={index} value={value} onSelect={deleteItem} />;
          })}
        </ol>
      </div>
    </div>
  );
};
export default App;
