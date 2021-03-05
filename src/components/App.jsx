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
  const deleteItem = (id) => {
    setTodoList((oldList) => {
      return oldList.filter((element, index) => {
        return index !== id;
      });
    });
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
            return (
              <List
                key={index}
                id={index}
                value={value}
                onSelect={deleteItem}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};
export default App;
