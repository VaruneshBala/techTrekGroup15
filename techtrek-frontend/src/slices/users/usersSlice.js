import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  currentUser: "",
  userId: "",
  jwtToken: ""
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userLogin(state, action) {
      const { username, userId, jwtToken } = action.payload;
      state.currentUser = username;
      state.userId = userId;
      state.jwtToken = jwtToken
    },
  },
});

export const { userLogin, userLogout } = usersSlice.actions;

export default usersSlice.reducer;
