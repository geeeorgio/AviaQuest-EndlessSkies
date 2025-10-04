import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import { loadingReducer } from './slices/loadingStatus/slice';
import { onboardingReducer } from './slices/onboarding/slice';
import { playerReducer } from './slices/player/slice';
import { settingsReducer } from './slices/settings/slice';

const persistOnboardingConfig = {
  key: 'onboarding',
  storage: AsyncStorage,
};

const persistedOnboardingReducer = persistReducer(
  persistOnboardingConfig,
  onboardingReducer,
);

const persistPlayerConfig = {
  key: 'player',
  storage: AsyncStorage,
};

const persistedPlayerReducer = persistReducer(
  persistPlayerConfig,
  playerReducer,
);

const persistSettingsConfig = {
  key: 'settings',
  storage: AsyncStorage,
};

const persistedSettingsReducer = persistReducer(
  persistSettingsConfig,
  settingsReducer,
);

const store = configureStore({
  reducer: {
    player: persistedPlayerReducer,
    onboarding: persistedOnboardingReducer,
    settings: persistedSettingsReducer,
    loading: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { persistor, store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
