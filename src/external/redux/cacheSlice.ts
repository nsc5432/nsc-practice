import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CacheState<T = unknown> = {
  [key: string]: T;
};

const initialState: CacheState = {};

const cacheSlice = createSlice({
  name: "cache",
  initialState,
  reducers: {
    setCache: <T>(
      state: CacheState<T>,
      action: PayloadAction<{ key: string; value: T }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
    clearCache: (state: CacheState, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

export const { setCache, clearCache } = cacheSlice.actions;
export default cacheSlice.reducer;
