"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("./component");
var react_redux_1 = require("react-redux");
var action_1 = require("./action");
function mapStateToProps(state) {
    return {
        isShow: state.common.isShow
    };
}
function mapDispatchtoProps(dispatch) {
    return {
        getIsShow: function () { dispatch(action_1.getIsShow()); }
    };
}
exports.default = react_redux_1.connect(null, {})(component_1.default);
