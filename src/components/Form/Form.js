import { useState } from "react";

function Form({ todos, setTodos }) {
  const [newItem, setNewItem] = useState("");
  function handleEntry(e) {
    if (e.key === "Enter") {
      let newEntry = {
        todo: newItem,
        done: false,
      };
      let newSetTodos = [...todos, newEntry];
      setTodos(newSetTodos);
      setNewItem("");
    }
  }
  return (
    <div>
      <div>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
          onKeyDown={handleEntry}
          autoFocus
        />
      </div>
    </div>
  );
}

export default Form;