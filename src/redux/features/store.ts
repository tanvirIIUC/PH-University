import { configureStore } from '@reduxjs/toolkit'

import authReducer from './auth/AuthSlice'
import { BaseApi } from '../api/BaseApi'
import { persistStore, persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
 


const persistConfig = {
  key: 'auth',
  storage,
}
 
const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    auth:persistedAuthReducer,
    [BaseApi.reducerPath]:BaseApi.reducer,
  },
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware(
    {
      serializableCheck :{
        ignoreActions: [ FLUSH,REHYDRATE, PAUSE, PERSIST,PURGE,REGISTER]
      }
    }
  ).concat(BaseApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store);