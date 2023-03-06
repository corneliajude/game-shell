import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer, counterReducer, profileReducer } from './reducers';

const mainReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    profile: profileReducer,
});

// recipe * monkey patching *
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    mainReducer,
    composeEnhancers(applyMiddleware(thunk))
    // thunk = async operation -> takes some "thinking time"
);

export default store;