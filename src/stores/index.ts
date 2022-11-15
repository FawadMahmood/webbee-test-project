import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import reducer from './rootReducer';
import saga from './rootSaga';
import { reduxStorage } from './storage';
import { configureStore } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'rootKeyPersist',
    storage: reduxStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleware]
})


export const persistor = persistStore(store);
sagaMiddleware.run(saga);
