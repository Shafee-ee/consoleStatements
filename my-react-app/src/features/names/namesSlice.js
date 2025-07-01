import { createSlice } from '@reduxjs/toolkit';

const savedNames = JSON.parse(localStorage.getItem('names')) || [];

const initialState = {
    name: '',
    names: savedNames
};

const namesSlice = createSlice({
    name: 'names',
    initialState,
    reducers: {
        setName(state, action) {
            state.name = action.payload;
        },
        addName(state) {
            if (state.name.trim()) {
                state.names.push(state.name);
                state.name = '';
            }
        },
        deleteName(state, action) {
            state.names = state.names.filter((name, index) => index !== action.payload)
        }
    }
})

export const { setName, addName, deleteName } = namesSlice.actions;
export default namesSlice.reducer