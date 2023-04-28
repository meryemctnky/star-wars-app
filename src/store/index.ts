import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import StarshipSlice from './starships/StarshipSlice';

export const store = configureStore({
  reducer: {
    starships: StarshipSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Define a type for the entire state of the store, based on the current state returned by calling getState() on the store
export type AppDispatch = typeof store.dispatch; // Define a type for the dispatch function, which can be used to dispatch actions to the store
export const useAppDispatch: () => AppDispatch = useDispatch; // Create a custom hook for retrieving the dispatch function from the Redux store
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // Create a custom hook for selecting data from the Redux store that is typed using the RootState type
