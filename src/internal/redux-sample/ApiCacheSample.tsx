import { useCallback } from "react";
import CacheProvider from "../../external/redux/CacheProvider";
import CachedComponent from "../../external/redux/CachedComponent";

type User = {
  id: number;
  name: string;
};

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function ApiCacheSample() {
  // fetcher를 useCallback으로 감싸서 useEffect 재실행 방지
  const memoizedFetcher = useCallback(fetchUsers, []);

  return (
    <CacheProvider>
      <h1>Users List</h1>
      <CachedComponent<User[]> cacheKey="users" fetcher={memoizedFetcher}>
        {(users) => (
          <ul>
            {users.map((u) => (
              <li key={u.id}>{u.name}</li>
            ))}
          </ul>
        )}
      </CachedComponent>
    </CacheProvider>
  );
}

export default ApiCacheSample;
