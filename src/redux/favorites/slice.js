import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    setFavoriteItems(state, action) {
      state.items = action.payload;
    },
    setFavoriteLoading(state, action) {
      state.loading = action.payload;
    },
    setFavoriteError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setFavoriteItems, setFavoriteLoading, setFavoriteError } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
