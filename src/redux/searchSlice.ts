import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface SearchState {
    value: string;
}

const initialState: SearchState = {
    value: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    },
});

export const { setSearch } = searchSlice.actions;
export const searchValue = (state: RootState) => state.search.value;
export default searchSlice.reducer;