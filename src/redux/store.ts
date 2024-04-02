import { configureStore } from '@reduxjs/toolkit';
import search from './searchSlice';
import crews from './crewsSlice';

export const store = configureStore({
    reducer: {
        search,
        crews,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;