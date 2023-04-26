import { createSlice } from '@reduxjs/toolkit';
import { fetchModes } from './api';
import { AppDispatch, RootState } from './store';
import { IInitialState } from './types';

const initialState: IInitialState = {
    modes: [],
    isLoading: false,
    board: [],
    errors: '',
};

export const rootReducer = createSlice({
    name: 'hoverSquare',
    initialState,
    reducers: {
        createBoard(state, action) {
            state.board = Array(action.payload).fill(Array(action.payload).fill(false));
        },
        colorSquare(state, action) {
            const { columnIndex, rowIndex } = action.payload;

            state.board = state.board.reduce(
                (acc: boolean[][], oldRow: boolean[], currentRowIndex: number) => {
                    if (currentRowIndex === rowIndex) {
                        const newRow = [...oldRow];
                        newRow[columnIndex] = !newRow[columnIndex];
                        acc.push(newRow);
                    } else {
                        acc.push(oldRow);
                    }
                    return acc;
                },
                []
            );
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchModes.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchModes.fulfilled, (state, action) => {
            state.isLoading = false;
            state.modes = action.payload;
        });
        builder.addCase(fetchModes.rejected, (state, action) => {
            state.isLoading = false;
            state.errors = action.payload as string;
        });
    },
});
export const { createBoard, colorSquare } = rootReducer.actions;

export const selectModes = (state: RootState) => state.mainStore.modes;
export const selectBoard = (state: RootState) => state.mainStore.board;
export const selectIsLoading = (state: RootState) => state.mainStore.isLoading;
export const selectErrors = (state: RootState) => state.mainStore.errors;

export const handleCreateBoard = (mode: number) => (dispatch: AppDispatch): void => {
    dispatch(createBoard(mode));
};
export const handleColorSquare = (rowIndex: number, columnIndex: number) => (
    dispatch: AppDispatch
): void => {
    dispatch(colorSquare({ rowIndex, columnIndex }));
};

export default rootReducer.reducer;
