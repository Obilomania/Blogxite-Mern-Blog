import { configureStore } from "@reduxjs/toolkit";
import { userAuthReducer } from "./features/authSlice/userAuthSlice";
import authAPI from "./Apis/authAPI";

const store = configureStore({
    reducer: {
        userAuthStore: userAuthReducer,
        [authAPI.reducerPath]: authAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authAPI.middleware)
});


export type RootState = ReturnType<typeof store.getState>;
export default store