import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/search";
import Filter from "./components/filter";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade X no sistema",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "corrigir bug na tela de login",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 3,
      text: "revisar documentação da API",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 4,
      text: "implementar autenticação JWT",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 5,
      text: "criar componente de botão",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 6,
      text: "ajustar responsividade do site",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 7,
      text: "realizar testes no backend",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 8,
      text: "configurar banco de dados",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 9,
      text: "refatorar código do dashboard",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 10,
      text: "estudar sobre TypeScript",
      category: "estudos",
      isCompleted: false,
    },
    {
      id: 11,
      text: "praticar algoritmos",
      category: "estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 100),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
