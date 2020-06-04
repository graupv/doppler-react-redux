import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';

import LoginForm from '../LoginForm';
import NavBar from '../navbar';
import TokenRefresh from '../tokenrefresh';
import Trackmanager from '../trackmanager';
import Track from '../track';
import Addsong from '../addsong';
import Phrasebox from '../phrasebox';
import Home from '../Home';

import { configureStore } from '../../store';

const { store, persistor } = configureStore();

const App = () => (
    <Router>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {/* <NavBar /> */}
                <Home />
                {/* <Addsong /> */}
                {/* <Phrasebox /> */}
                {/* <Track /> */}
                {/* <Trackmanager /> */}
                {/* <LoginForm /> */}
            {/*<TokenRefresh reviewTime={3600000} /> */}
            </PersistGate>
        </Provider>
    </Router>
);

export default App;