import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
      const isFavorite = state.items.some(
        (fav_Item) => fav_Item._id === action.payload._id
      );

      if (!isFavorite) {
        state.items = [...state.items, action.payload];
        toast("Added to favorites");
      } else {
        state.items = state.items.filter(
          (fav_Item) => fav_Item._id !== action.payload._id
        );
        toast("Removed from favorites");
      }
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
