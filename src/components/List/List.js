import { useState } from "react";

function List({ todos, setTodos, activeFilter }) {
  const [toggle, setToggle] = useState(true);
  function handleCheck(index) {
    let newArray = [...todos];
    newArray[index]["done"] = todos[index]["done"] ? false : true;
    setTodos(newArray);
  }
  function handleDestroy(index) {
    let newArray = [...todos];
    newArray.splice(index, 1);
    setTodos(newArray);
  }
  function toggleAll() {
    let newArray = [...todos];
    if (toggle) {
      newArray.forEach((obj) => (obj.done = true));
      setToggle(false);
    } else {
      newArray.forEach((obj) => (obj.done = false));
      setToggle(true);
    }
    setTodos(newArray);
  }
  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" onClick={() => toggleAll()}>
          Mark all as complete
        </label>

        <ul className="todo-list">
          {todos.map((element, index) => {
            return (
              <li
                key={index}
                className={element.done ? "completed" : ""}
                style={{ display: (element.done && activeFilter === "active") || (!element.done && activeFilter === "completed") ? "none" : "block" }}>
                <div className="view">
                  <input className="toggle" type="checkbox" onChange={() => handleCheck(index)} checked={element.done} />
                  <label>{element.todo}</label>
                  <button className="destroy" onClick={() => handleDestroy(index)}></button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default List;