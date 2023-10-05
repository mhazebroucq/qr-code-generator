"use strict";
exports.__esModule = true;
var modes_1 = require("../constants/modes");
function getMode(data) {
    switch (true) {
        case /^[0-9]*$/.test(data):
            return modes_1["default"].numeric;
        case /^[0-9A-Z $%*+\-./:]*$/.test(data):
            return modes_1["default"].alphanumeric;
        default:
            return modes_1["default"].byte;
    }
}
exports["default"] = getMode;
