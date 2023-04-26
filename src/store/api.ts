import { createAsyncThunk } from '@reduxjs/toolkit';
import { isResponseOk } from '../utils/isResponseOk';

export const fetchModes = createAsyncThunk(
    'hoverSquare/fetchModes',
    async (_, { rejectWithValue }) => {
        const response = await fetch(
            'https://60816d9073292b0017cdd833.mockapi.io/modes'
        );
        const data = await response.json();

        if (isResponseOk(response)) {
            return data;
        }

        return rejectWithValue(response.statusText);
    }
);
