import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInfo: null,
};

//create slice
export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInfo: (state, action) => {
      state.travelTimeInfo = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInfo } =
  navSlice.actions;

//selectors
export const getOrigin = (state) => state.nav.origin;
export const getDestination = (state) => state.nav.destination;
export const getTravelTimeInfo = (state) => state.nav.travelTimeInfo;

export default navSlice.reducer;
