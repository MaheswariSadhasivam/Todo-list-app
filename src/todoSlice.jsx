// // import { createslice } from "@reduxjs/toolkit";
// import { userlist } from './Data';


// const userSlice = createslice({
//     name: "users",
    
//     initialState: userlist,
//     reducers: {

//     }

// }

// )
// export default userSlice.reducers

import { createSlice } from '@reduxjs/toolkit';


const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) todo.text = newText;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
