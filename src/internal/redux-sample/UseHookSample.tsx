import { useEffect } from "react";
import useCache from "../../external/redux/useCache";
import CacheProvider from "../../external/redux/CacheProvider";

type Todo = { id: number; title: string; completed: boolean };

const TodoList = () => {
  const { value: todos, set } = useCache<Todo[]>("todos");

  useEffect(() => {
    if (!todos) {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((res) => res.json())
        .then((data) => set(data));
    }
  }, [todos, set]);

  if (!todos) return <div>Loading todos...</div>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title} - {todo.completed ? "✅" : "❌"}
        </li>
      ))}
    </ul>
  );
};

export const UseHookSample = () => (
  <CacheProvider>
    <TodoList />
  </CacheProvider>
);
