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
        urgency:'toDo',
        deadLine: ''
      };
      const index = state.findIndex((todo) => todo.completed === true);
      state.splice(index, 0, (newTodo));
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

    setUrgency: (state = initialState, action) => {
      const { id, value } = action.payload;
      const index = state.findIndex(todo => todo.id === id);
      if (index === -1) {
        return state;
      }
      const updatedTodo = {
        ...state[index],
        urgency: value
      };
      const newState = [
        ...state.slice(0, index),
        updatedTodo,
        ...state.slice(index + 1)
      ];
      return newState;
    },

    setDeadLine: (state,action) => {
      console.log('welcome to add deadline');
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1, { ...state[index], deadLine:{state} });
    }

  },
});

export const { addTodo, toggleCheckbox, deleteTodo, setUrgency, setDeadLine} = todoSlice.actions;
export default todoSlice.reducer;