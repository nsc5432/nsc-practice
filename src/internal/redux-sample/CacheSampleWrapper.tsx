import { useEffect } from "react";
import useCache from "../../external/redux/useCache";
import UsersSample, { type User } from "./UsersSample";
import TodosSample, { type Todo } from "./TodosSample";

const CacheSampleWrapper = () => {
  const { set: setUsers } = useCache<User[]>("users");
  const { set: setTodos } = useCache<Todo[]>("todos");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <>
      <UsersSample />
      <hr />
      <TodosSample />
    </>
  );
};

export default CacheSampleWrapper;
