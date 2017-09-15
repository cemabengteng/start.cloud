import * as React from "react";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = _createStore();
const history = syncHistoryWithStore(browserHistory, store)

//component
import { CommonContainer, CommonReducer } from "./common";

render(
    <Router history={history}>
        <Router path="/" component={}>
        </Router>
    </Router>,
    document.getElementById("app")
);

function _createStore() {
    const rootReducer = createReducer();
    if (process.env.NODE_ENV === "development") {
        return createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
    } else {
        return createStore(rootReducer, applyMiddleware(ReduxThunk));
    }
}

function createReducer() {
    return combineReducers({

    });
}