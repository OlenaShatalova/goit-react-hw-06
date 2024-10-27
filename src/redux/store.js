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
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

const contactsPersistConfig = {
  key: 'usersList', // ключ для збереження в сховищі
  storage, // сховище (localStorage)
  whitelist: ['items'], // вказуємо, що зберігати
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
