import React, { useEffect } from "react";
import useCache from "./useCache";

type CachedComponentProps<T> = {
  cacheKey: string;
  fetcher: () => Promise<T>;
  children: (data: T) => React.ReactNode;
};

const CachedComponent = <T,>({
  cacheKey,
  fetcher,
  children,
}: CachedComponentProps<T>) => {
  const { value, set } = useCache<T>(cacheKey);

  useEffect(() => {
    if (!value) {
      fetcher().then((data) => set(data));
    }
  }, [cacheKey, value, fetcher, set]);

  if (!value) return <div>Loading...</div>;
  return <>{children(value)}</>;
};

export default CachedComponent;
