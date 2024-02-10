import {combineReducers, configureStore, Tuple} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import authSlice from './redusers/auth/authSlice'
import toDoSlize from "./redusers/todoSlize/toDoSlize";
import {PostApi} from "./redusers/auth/auth-query";
import {UserApi} from "./redusers/users/user-api";

const rootReducer = combineReducers({
    // authSlice,
    // toDoSlize,
    [PostApi.reducerPath]: PostApi.reducer,
    [UserApi.reducerPath]: UserApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            // prepend and concat calls can be chained
            .concat(logger).concat(PostApi.middleware, UserApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch