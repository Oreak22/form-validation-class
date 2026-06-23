import { createSlice } from "@reduxjs/toolkit";

export const counterFactory = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    userName: "",
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increaceByuserWish: (state, action) => {
      console.log(action);
      const newvalue = state.value + action.payload;
      state.value = newvalue;
    },
  },
});

export const { increment, decrement, increaceByuserWish } =
  counterFactory.actions;
