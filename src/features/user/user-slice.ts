import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userId: string;
  email: string;
  nickname: string;
  token: string;
}

const initialState: UserState = {
  userId: '',
  email: '',
  nickname: '',
  token: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      return action.payload;
    }
  }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;