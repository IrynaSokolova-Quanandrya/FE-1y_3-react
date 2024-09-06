import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { taskReducer } from './tasks/taskSlice';
import { filtersReducer } from './tasks/filterSlice';
import { authReducer } from './auth/authSlice';
// 
/**
 * 1. Додаємо маршрутизацію
 * 2. додаємо сторінки <Home>, <Login>, <Register>, <Tasks>
 * 3. додаємо компоненти 
 * 
 */

const middleware = (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    filters: filtersReducer, 
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})


// export const persistor = persistStore(store);





