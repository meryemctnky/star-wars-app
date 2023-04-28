import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store/index';
import {
  FetchStarshipsProps,
  FetchStarshipsResponse,
  Starship,
} from '@/types/types';
import axios from 'axios';

export const fetchStarships = async (page?: number): Promise<Starship[]> => {
  try {
    const response = await axios.get(`${process.env.API_ENDPOINT}`, {
      params: page ? { page } : undefined,
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getStarshipById = async (id: number): Promise<Starship> => {
  try {
    const response = await axios.get(`${process.env.API_ENDPOINT}${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't fetch the starship");
  }
};

export const fetchStarshipsAsync = createAsyncThunk<
  FetchStarshipsResponse,
  FetchStarshipsProps,
  { state: RootState }
>('starships/fetchStarshipsAsync', async (props, thunkAPI) => {
  const { page, query } = props;

  try {
    const response = await axios.get(
      `${process.env.API_ENDPOINT}?search=${query}&page=${page}`
    );

    return {
      starships: response.data.results,
      total: response.data.count,
      next: response.data.next,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to fetch starships');
  }
});
