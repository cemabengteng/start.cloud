"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
exports.CommonContainer = app_1.AppContainer;
var defayltState = {
    isShow: false
};
function reducer(state, action) {
    if (state === void 0) { state = defayltState; }
    return {
        isShow: app_1.AppReducer(state, action).isShow
    };
}
exports.CommonReducer = reducer;
