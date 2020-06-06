import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
// import { connect } from 'react-redux';

import LoginForm from '../LoginForm';
import NavBar from '../navbar';
import TokenRefresh from '../tokenrefresh';
import Trackmanager from '../trackmanager';
import Track from '../track';
import Addsong from '../addsong';
import Phrasebox from '../phrasebox';
import Home from '../Home';

import { configureStore } from '../../store';

// import './styles.css';

const { store, persistor } = configureStore();

const App = () => (
    <Router>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavBar />
                <Switch>
                    <Route path='/' exact component={Trackmanager} />
                    <Route path='/tracks' exact component={Track} />
                    <Route path='/phrasebox' exact component={Phrasebox} />
                </Switch>
                {/* <Home /> */}
                {/* <Addsong /> */}
                {/* <Phrasebox /> */}
                {/* <Track /> */}
                {/* <Trackmanager /> */}
                {/* <LoginForm /> */}
            {/* <TokenRefresh reviewTime={3600000} /> */}
            </PersistGate>
        </Provider>
    </Router>
);

export default App;