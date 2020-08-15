import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "../pages/Weather/Weather.slice";

export default configureStore({
  reducer: {
    weather: weatherSlice,
  },
});
