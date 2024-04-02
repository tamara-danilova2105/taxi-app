import { configureStore } from '@reduxjs/toolkit';
import search from './searchSlice';
import crews from './crewsSlice';
import coordinates from './coordinatesSlice';

export const store = configureStore({
    reducer: {
        search,
        crews,
        coordinates,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;