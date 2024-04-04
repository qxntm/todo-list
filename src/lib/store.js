import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todos/todosSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
// import localStorage from 'redux-persist/es/storage';


// const createNoopStorage = () => {
//     return {
//         getItem(_key) {
//             return Promise.resolve(null);
//         },
//         setItem(_key, value) {
//             return Promise.resolve(value);
//         },
//         removeItem(_key) {
//             return Promise.resolve();
//         },
//     };
// };

// const storage = typeof window !== 'undefined' ? localStorage : createNoopStorage();
//setup storage
const persistConfig = {
    key: 'root',
    storage,
  };

  const rootReducer = combineReducers({ 
    todos: todoReducer,
  })

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});
export const persistor = persistStore(store);