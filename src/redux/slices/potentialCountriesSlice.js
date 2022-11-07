
//This slice configures the state related to potentialCountries.

import { createSlice } from "@reduxjs/toolkit";

export const potentialCountriesSlice = createSlice({
  name: "potentialCountries",
  initialState: {
    value: [
      {
        name: {
          common: "America",
        },
      },
    ],
  },
  reducers: {
    setPotentialCountries: (state, action) => {
      state.value = action.payload;
    },
    deletePotentialCountries: (state) => {
      state.value = null;
    },
  },
});

//The createSlice method of “@reduxjs/toolkit” will take whatever reducers added to the “reducers” property of its argument and turn them into an “actions”. Will use these actions anywhere in the application to manipulate global state.
export const {
  setPotentialCountries,
  deletePotentialCountries } = potentialCountriesSlice.actions;

  //This function defines how to read the state of potentialCountries.
export const selectPotentials = (state) => state.potentialCountries.value;


//The reducer from potentialCountriesSlice is created by the “createSlice” method from “@reduxjs/toolkit”. This "master reducer" will be supplied to the redux store.
export default potentialCountriesSlice.reducer;

