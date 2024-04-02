import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Crews } from "../types/types";

interface CrewState {
    crews: Crews[];
}

const initialState: CrewState = {
    crews: [],
}

export const crewsSlice = createSlice({
    name: 'crews',
    initialState,
    reducers: {
        setCrewList: (state, action: PayloadAction<Crews[]>) => {
            state.crews = action.payload;
        }
    },
});

export const { setCrewList } = crewsSlice.actions;
export const getCrews = (state: RootState) => state.crews.crews;
export default crewsSlice.reducer;