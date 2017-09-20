"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 默认的
var defaultStoreState = {
    isShow: false,
};
function reducer(state, action) {
    if (state === void 0) { state = defaultStoreState; }
    var tmp = {
        isShow: state.isShow
    };
    switch (action.type) {
        case "1":
            return tmp;
        default:
            return state;
    }
}
exports.default = reducer;
