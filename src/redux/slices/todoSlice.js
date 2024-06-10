// TODO: todoSlice 를 작성하세요.
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    title: "",
    content: "",
    isDone: false,
  },

  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setList: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    setDone: (state, action) => {
      state.isDone = !state.isDone;
    },

    setDelete: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setTitle, setContent, setList, setDone, setDelete } =
  todoSlice.actions;
export default todoSlice.reducer;
