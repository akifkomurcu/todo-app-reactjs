import React from "react";

function Footer({ todos, setTodos, activeFilter, setActiveFilter }) {
  let activeItems = todos.filter((obj) => obj.done === false);
  function clearCompleted(e) {
    e.preventDefault();
    setTodos(activeItems);
  }
  function handleFilter(filter) {
    setActiveFilter(filter);
  }

  return (
    <div>
      {/* <!-- This footer should hidden by default and shown when there are todos --> */}
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeItems.length} </strong>
          items left
        </span>

        <meta property="activeFilter" content="all" mv-storage="none"></meta>
        <ul className="filters">
          <li>
            <a className={activeFilter === "all" ? "selected" : ""} onClick={() => handleFilter("all")}>
              All
            </a>
          </li>
          <li>
            <a className={activeFilter === "active" ? "selected" : ""} onClick={() => handleFilter("active")}>
              Active
            </a>
          </li>
          <li>
            <a className={activeFilter === "completed" ? "selected" : ""} onClick={() => handleFilter("completed")}>
              Completed
            </a>
          </li>
        </ul>

        {/* <!-- Hidden if no completed items are left ↓ --> */}
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default Footer;