import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";

const provinceSlice = createSlice({
    name: "Province Slice",
    initialState: {
        provinces: data.provinces
    },
    reducers: {
        updateProvince(state, action) {
            state.provinces = action.payload
        }
    }
});

const { updateProvince } = provinceSlice.actions;
const ProvinceReducer = provinceSlice.reducer;

export default ProvinceReducer;
export { updateProvince };
