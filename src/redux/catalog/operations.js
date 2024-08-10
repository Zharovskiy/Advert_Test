import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api/instanceAxios.js";

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get("/catalog");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);