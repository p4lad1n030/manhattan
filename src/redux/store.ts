
import { configureStore } from '@reduxjs/toolkit'
import { logFromAuth } from './loginSlice'


export const store = configureStore({
  reducer: {
    // refStorage: refFromStorage,
    useAuth: logFromAuth,
  }
})
export default store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
