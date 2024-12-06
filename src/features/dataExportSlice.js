import { createSlice } from "@reduxjs/toolkit";

const dataExportSlice = createSlice({
  name: "dataExport",
  initialState: { exportedData: [] },
  reducers: {
    setExportedData(state, action) {
      state.exportedData = action.payload;
    },
    clearExportedData(state) {
      state.exportedData = [];
    },
  },
});

export const { setExportedData, clearExportedData } = dataExportSlice.actions;


export default dataExportSlice.reducer;
