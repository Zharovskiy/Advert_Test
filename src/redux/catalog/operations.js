import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api/instanceAxios.js";

export const fetchCatalogTotal = createAsyncThunk(
  "catalog/fetchTotal",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/catalog");
      return data.length;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchAll",
  async (pagination, thunkAPI) => {
    try {
      const { page, limit } = pagination;
      const { data } = await instance.get(
        `/catalog?page=${page}&limit=${limit}`
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
