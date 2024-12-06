import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    sidebarShow: true,
    sidebarUnfoldable: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarShow = !state.sidebarShow;
    },
    setSidebarVisibility: (state, action) => {
      state.sidebarShow = action.payload;
    },
    toggleUnfoldable: (state) => {
      state.sidebarUnfoldable = !state.sidebarUnfoldable;
    },
  },
});

export const { toggleSidebar, setSidebarVisibility, toggleUnfoldable } = uiSlice.actions;
export default uiSlice.reducer;
