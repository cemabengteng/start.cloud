"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CounterComponent = /** @class */ (function (_super) {
    __extends(CounterComponent, _super);
    function CounterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CounterComponent.prototype.render = function () {
        return (React.createElement("h1", null, "go go go"));
    };
    CounterComponent.prototype.componentDidCatch = function (error, info) {
        console.log("error " + error);
        console.log("error info " + info);
    };
    return CounterComponent;
}(React.Component));
exports.default = CounterComponent;
