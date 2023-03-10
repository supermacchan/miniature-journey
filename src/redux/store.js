import { configureStore } from "@reduxjs/toolkit";

import { shippingReducer } from "./shippingSlice";
import { historyReducer } from "./historySlice";
import { officesReducer } from "./officesSlice";
import { filtersReducer } from "./filterSlice";

import storage from 'redux-persist/lib/storage';
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
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const historyPersistConfig = {
    key: 'history',
    storage,
    whitelist: ['history'],
    stateReconciler: autoMergeLevel2,
};

const historyPersistedReducer = persistReducer(historyPersistConfig, historyReducer);

export const store = configureStore({
    reducer: {
        shipping: shippingReducer,
        history: historyPersistedReducer,
        offices: officesReducer,
        filter: filtersReducer,  
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
              },
        })
});

export const persistor = persistStore(store);
