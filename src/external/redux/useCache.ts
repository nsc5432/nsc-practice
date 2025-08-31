import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import { clearCache, setCache } from "./cacheSlice";

const useCache = <T = unknown>(key: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const value = useSelector(
    (state: RootState) => state.cache[key] as T | undefined
  );

  const set = (val: T) => dispatch(setCache({ key, value: val }));
  const clear = () => dispatch(clearCache(key));

  return { value, set, clear };
};

export default useCache;
