import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.fulfilled, (state, action) => {
        const { user, token } = action.payload;
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        const { user, token } = action.payload;
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(authOperations.logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(authOperations.fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          authOperations.logIn.pending,
          authOperations.logOut.pending,
          authOperations.fetchCurrentUser.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          authOperations.logIn.rejected,
          authOperations.logOut.rejected,
          authOperations.fetchCurrentUser.rejected
        ),
        handleRejected
      );
  },
});

export default authSlice.reducer;
