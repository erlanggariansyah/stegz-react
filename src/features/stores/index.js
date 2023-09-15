import { configureStore } from "@reduxjs/toolkit";
import ProvinceReducer from "../slices/provinceSlice";

const stores = configureStore({
    reducer: {
        provinces: ProvinceReducer
    }
})

export default stores;
