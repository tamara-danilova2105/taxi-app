import { configureStore } from '@reduxjs/toolkit';
import search from './searchSlice';

export const store = configureStore({
    reducer: {
        search,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;