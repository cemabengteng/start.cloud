import * as React from "react";
import { render } from "react-dom";
import { Router, browserHistory, Route } from "react-router";
import { Provider } from "react-redux";
// import { createStore, combineReducers, applyMiddleware } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import CounterComponent from "./counter/component";

// const store = _createStore();
// const history = syncHistoryWithStore(browserHistory, store)

//component
// import { CommonContainer, CommonReducer } from "./common";

render(
    // <Provider store={store}>
    //     <Router history={history}>
    //         <Route path="/" component={CommonContainer}>
    //         </Route>
    //     </Router>
    // </Provider>


    // <div>
    //     <h1>hello man!!</h1>
    // </div>


    <CounterComponent />
    ,
    document.getElementById("app")
);

// function _createStore() {
//     const rootReducer = createReducer();
//     if (process.env.NODE_ENV === "development") {
//         return createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
//     } else {
//         return createStore(rootReducer, applyMiddleware(ReduxThunk));
//     }
// }

// function createReducer() {
//     return combineReducers({
//         // common: CommonReducer
//     });
// }