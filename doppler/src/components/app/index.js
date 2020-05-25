import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';

import LoginForm from '../LoginForm';

import { configureStore } from '../../store';

const { store, persistor } = configureStore();

const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {/* <LoginForm /> */}
        </PersistGate>
    </Provider>
);

export default App;