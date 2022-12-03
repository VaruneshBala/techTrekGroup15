import { configureStore } from '@reduxjs/toolkit'

import usersReducer from './slices/users/usersSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
  },
})
