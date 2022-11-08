import { createSlice } from "@reduxjs/toolkit";
import initialCountry from "../../assets/initialCountry"

console.log(initialCountry)
export const displayCountrySlice = createSlice({
    name: "displayCountry",
    initialState: {
        value: initialCountry,
    },
    reducers: {
        setDisplayCountry: (state, action) => {
            state.value = action.payload
        },
        deleteDisplayCountry: (state) => {
            state.value = null;
        }
    }
})

//The createSlice method of “@reduxjs/toolkit” will take whatever reducers you add to the “reducers” property of its argument and turn them into an “actions”. You can then use these actions anywhere in your application to manipulate global state.
export const { setDisplayCountry, deleteDisplayCountry } = displayCountrySlice.actions;

//defines how to read state from displayed
export const selectDisplay = (state) => state.displayedCountry.value;


export default displayCountrySlice.reducer