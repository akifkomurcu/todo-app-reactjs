import "./App.css";
import { useState } from "react";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
  const [todos, setTodos] = useState([
    { todo: "Learn JavaScript", done: true },
    { todo: "Learn React", done: true },
    { todo: "Have a life!", done: false },
  ]);

  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todo List</h1>
          <Form todos={todos} setTodos={setTodos} />
        </header>
        {todos.length > 0 && (
          <div>
            <List todos={todos} setTodos={setTodos} activeFilter={activeFilter} />
            <Footer todos={todos} setTodos={setTodos} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          </div>
        )}
      </section>

     
    </div>
  );
}

export default App;