import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCatalog } from "./operations";

const initialState = {
  items: [],
  pagination: {},
  loading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data.data;
        state.pagination = action.payload.data.pagination;
      })
      .addMatcher(isAnyOf(fetchCatalog.pending), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(fetchCatalog.rejected), (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;
