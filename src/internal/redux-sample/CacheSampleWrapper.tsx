import { useEffect } from "react";
import useCache from "../../external/redux/useCache";
import UsersSample, { type User } from "./UsersSample";
import TodosSample, { type Todo } from "./TodosSample";

const CacheSampleWrapper = () => {
  const { set: setUsers } = useCache<User[]>("users");
  const { set: setTodos } = useCache<Todo[]>("todos");

  useEffect(() => {
    // api 두번씩 호출되는데, 개발 환경에서만 side-effect 검출을 강화하기 위해서 그런것
    // main.tsx 파일의 StrictMode 제거하면 해결되긴함
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
