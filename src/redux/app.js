import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    data: null,
    favourites: [],
    showFavourites: false
  },
  reducers: {
    setGlobalData: (state, action) => {
      state.data = action.payload;
    },
    handleFavourites: (state, action) => {
      const isAddedAlready = state.favourites.find(comic => comic.id === action.payload.id);
      if (!isAddedAlready) {
        state.favourites = [...state.favourites, action.payload];
      } else {
        state.favourites = state.favourites.filter(comic => comic.id !== action.payload.id);
      }
    },
    setShowFavourites: (state, action) => {
      state.showFavourites = action.payload;
    }
  },
})

export const { setGlobalData, handleFavourites, setShowFavourites } = appSlice.actions

export default appSlice.reducer