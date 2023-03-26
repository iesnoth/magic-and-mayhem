import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/user/authSlice';
import dragonReducer from '../features/dragons/dragonSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        dragons: dragonReducer
    }
});