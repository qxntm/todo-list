import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    //create reducer name "addTodo" for adding new task
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },

    //create reducer name "toggleComplete" for handle when user complete the todo list
    toggleCheckbox: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      const index = state.findIndex((todo) => todo.id === action.payload);
      const Length = state.length;
      if (todo.completed) {
        state.splice(index, 1, { ...state[index], completed: false });
      }
      else{
        state.splice(Length, 0, { ...state[index], completed: true });
        state.splice(index, 1);
      }
    },

    //create reducer name "deleteTodo" for handle when user delete todo (cancel it/whatever)
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      };
    },

  },
});

export const { addTodo, toggleCheckbox, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;