import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCatalog, fetchCatalogTotal } from "./operations";

const initialState = {
  items: null,
  totalItem: null,
  loading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalogTotal.fulfilled, (state, action) => {
        state.loading = false;
        state.totalItem = action.payload;
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addMatcher(
        isAnyOf(
          fetchCatalogTotal.pending,
          fetchCatalog.pending,
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchCatalogTotal.rejected,
          fetchCatalog.rejected,
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const catalogReducer = catalogSlice.reducer;