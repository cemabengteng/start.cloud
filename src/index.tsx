import * as React from "react";
import { render } from "react-dom";
import { Router, browserHistory, Route, IndexRedirect } from "react-router";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


//material 依赖
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

//component
import { CommonContainer, CommonReducer } from "./common";
import GridImgComponent from "./gridimg/component";

const store = _createStore();
const history = syncHistoryWithStore(browserHistory, store)


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
        routing: routerReducer,
        common: CommonReducer,
    });
}

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: "#3b78e7",
        primary2Color: "#3367d6",
    },
    toolbar: {
        height: 48,
        titleFontSize: 18,
    },
    tableHeaderColumn: {
        height: 48,
    },
    menuItem: {
        height: 32
    },
});


render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={CommonContainer}>
                    <IndexRedirect to="img" />
                    <Route path="img" component={GridImgComponent} />
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>
    ,
    document.getElementById("app")
);
