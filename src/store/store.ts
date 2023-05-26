import { configureStore } from '@reduxjs/toolkit'
import playerReducer from '@/slices/slices'

export function makeStore() {
  return configureStore({
    reducer: { 
      player: playerReducer
    },
  });
}

export const store = makeStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch






