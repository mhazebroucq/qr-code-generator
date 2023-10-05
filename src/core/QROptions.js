"use strict";
exports.__esModule = true;
var qrTypes_1 = require("../constants/qrTypes");
var drawTypes_1 = require("../constants/drawTypes");
var errorCorrectionLevels_1 = require("../constants/errorCorrectionLevels");
var defaultOptions = {
    type: drawTypes_1["default"].canvas,
    width: 300,
    height: 300,
    data: "",
    margin: 0,
    qrOptions: {
        typeNumber: qrTypes_1["default"][0],
        mode: undefined,
        errorCorrectionLevel: errorCorrectionLevels_1["default"].Q
    },
    imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4,
        crossOrigin: undefined,
        margin: 0
    },
    dotsOptions: {
        type: "square",
        color: "#000"
    },
    backgroundOptions: {
        color: "#fff"
    }
};
exports["default"] = defaultOptions;
