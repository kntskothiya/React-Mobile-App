import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { hoodieCollectionURL, newCollectionURL, saleCollectionURL, userInfoURL } from "../config/url";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export const saveUserInfo = createAsyncThunk(
    'data/saveUserInfo',
    async (userData) => {
        try {
            const response = await axios.post(userInfoURL, userData);
            console.log("Register Data", response.data);
            return response.data;
        } catch (error) {
            console.log("err");
            throw error;
        }
    }
);

export const fetchUserInfo = createAsyncThunk(
    'data/fetchUserInfo',
    async () => {
        try {
            const response = await axios.get(userInfoURL);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const fetchSaleCollection = createAsyncThunk(
    'data/fetchSaleCollection',
    async () => {
        try {
            const response = await axios.get(saleCollectionURL);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const fetchNewCollection = createAsyncThunk(
    'data/fetchNewCollection',
    async () => {
        try {
            const response = await axios.get(newCollectionURL);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const fetchHoodiesCollection = createAsyncThunk(
    'data/fetchHoodiesCollection',
    async () => {
        try {
            const response = await axios.get(hoodieCollectionURL);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

const userSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveUserInfo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(saveUserInfo.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(saveUserInfo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchUserInfo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserInfo.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUserInfo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchSaleCollection.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSaleCollection.fulfilled, (state, action) => {
                state.loading = false;
                state.saleCollectionData = action.payload;
            })
            .addCase(fetchSaleCollection.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchNewCollection.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNewCollection.fulfilled, (state, action) => {
                state.loading = false;
                state.newCollectionData = action.payload;
            })
            .addCase(fetchNewCollection.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchHoodiesCollection.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHoodiesCollection.fulfilled, (state, action) => {
                state.loading = false;
                state.hoodieCollectionData = action.payload;
            })
            .addCase(fetchHoodiesCollection.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;