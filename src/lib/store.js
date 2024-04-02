import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todos/todosSlice';

//store todos reducer from './feature/todos/todosSlice'
const store = configureStore({
 reducer: {
 todos: todoReducer,
 },
});

export default store;