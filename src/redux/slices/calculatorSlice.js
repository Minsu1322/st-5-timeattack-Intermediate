// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.

import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    value: 0,
  },

  reducers: {
    add: (state, action) => {
      state.value += action.payload;
    },

    minus: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { add, minus } = calculatorSlice.actions;
export default calculatorSlice.reducer;
