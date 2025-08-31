import useCache from "../../external/redux/useCache";

export type User = { id: number; name: string };

function UsersSample() {
  const { value: users } = useCache<User[]>("users");

  return (
    <>
      <h1>Users List</h1>

      <ul>
        {users?.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </>
  );
}

export default UsersSample;
