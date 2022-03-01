import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialStateValue = { id: 0, name: '', email: '', role: '' };

const userSlice = createSlice({
  name: 'user',
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    }
  }
});

export const { login, logout } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});
