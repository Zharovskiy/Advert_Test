import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api/instanceAxios.js";

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchAll",
  async (params, thunkAPI) => {
    try {
      const { data } = await instance.get("/catalog", { params });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
