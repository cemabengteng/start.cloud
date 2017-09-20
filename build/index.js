"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dom_1 = require("react-dom");
var component_1 = require("./counter/component");
// const store = _createStore();
// const history = syncHistoryWithStore(browserHistory, store)
//component
// import { CommonContainer, CommonReducer } from "./common";
react_dom_1.render(
// <Provider store={store}>
//     <Router history={history}>
//         <Route path="/" component={CommonContainer}>
//         </Route>
//     </Router>
// </Provider>
// <div>
//     <h1>hello man!!</h1>
// </div>
React.createElement(component_1.default, null), document.getElementById("app"));
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
