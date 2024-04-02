import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CoordinatesState {
    coordinates: number[];
}

const initialState: CoordinatesState = {
    coordinates: [56.8498, 53.2045],
}

export const coordinatesSlice = createSlice({
    name: 'coordinates',
    initialState,
    reducers: {
        setCoordinates: (state, action: PayloadAction<number[]>) => {
            state.coordinates = action.payload;
        }
    },
});

export const { setCoordinates } = coordinatesSlice.actions;
export const getCoordinates = (state: RootState) => state.coordinates.coordinates;
export default coordinatesSlice.reducer;