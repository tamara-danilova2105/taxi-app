import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Crews } from "../types/types";

interface CrewState {
    crews: Crews[];
    orderCrews: Crews | null;
}

const initialState: CrewState = {
    crews: [],
    orderCrews: null,
}

export const crewsSlice = createSlice({
    name: 'crews',
    initialState,
    reducers: {
        setCrewList: (state, action: PayloadAction<Crews[]>) => {
            state.crews = action.payload;
        },
        setOrderCrew: (state, action: PayloadAction<Crews>) => {
            state.orderCrews = action.payload;
        },
    },
});

export const { setCrewList, setOrderCrew } = crewsSlice.actions;
export const getCrews = (state: RootState) => state.crews.crews;
export const getOrderCrew = (state: RootState) => state.crews.orderCrews;
export default crewsSlice.reducer;