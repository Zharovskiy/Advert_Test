import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors.js";

export const selectCatalog = (state) => state.catalog.items;
export const selectCatalogTotal = (state) => state.catalog.totalItem;
export const selectLoading = (state) => state.catalog.loading;
export const selectError = (state) => state.catalog.error;

export const selectFilteredCatalog = createSelector(
  [selectCatalog, selectNameFilter],
  (selectCatalog, selectNameFilter) => {
    return selectCatalog.filter((catalog) => {
      return (
        catalog.name.toLowerCase().includes(selectNameFilter.toLowerCase()) ||
        catalog.number.includes(selectNameFilter)
      );
    });
  }
);