import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StarshipState } from '@/types/types';
import { fetchStarshipsAsync } from '../../services';

const initialState: StarshipState = {
  starships: [],
  queryResult: [],
  page: 1,
  query: '',
  total: 0,
  isLoading: true,
  isAllLoaded: false,
  error: '',
};

const starshipSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {
    getNextPage: (state) => {
      state.page = state.page + 1;
    },
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    clearState: (state) => {
      state.starships = [];
      state.queryResult = [];
      state.page = 1;
      state.query = '';
      state.total = 0;
      state.isAllLoaded = false;
    },
  },
  //// Handle additional actions that may be dispatched by asynchronous actions
  extraReducers({ addCase }) {
    addCase(fetchStarshipsAsync.pending, (state) => {
      state.isLoading = true;
    });
    addCase(fetchStarshipsAsync.fulfilled, (state, action) => {
      state.isLoading = false;

      const { starships, total, next } = action.payload;

      //// Update the state based on whether a query has been made
      if (state.query === '') {
        state.starships = [...state.starships, ...starships];
      } else {
        state.queryResult = [...state.queryResult, ...starships];
        state.starships = [...state.queryResult];
      }

      state.total = total;

      state.isAllLoaded = next === null ? true : false; //// Set isAllLoaded to true if there are no more pages to load
    }),
      addCase(fetchStarshipsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = `Error getting starships: ${action.error.message}`;
      });
  },
});

export const { getNextPage, updateQuery, clearState } = starshipSlice.actions;

export default starshipSlice.reducer;
