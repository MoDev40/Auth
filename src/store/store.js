import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authSlice from "./features/authSlice";
import userSlice from "./features/userSlice";
export const store = configureStore({
    reducer:{
        [authSlice.reducerPath]: authSlice.reducer,
        [userSlice.reducerPath]:userSlice.reducer
    },

    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware()
        .concat(authSlice.middleware)
        .concat(userSlice.middleware)

})

setupListeners(store.dispatch)