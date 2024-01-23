"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputStyles = void 0;
var _reactNative = require("react-native");
var _colors = require("./colors");
const inputStyles = _reactNative.StyleSheet.create({
  input: {
    paddingVertical: 18,
    paddingHorizontal: 23,
    backgroundColor: _colors.colors.lightGray,
    borderRadius: 8,
    borderColor: _colors.colors.dark,
    borderWidth: 1,
    color: _colors.colors.dark,
    width: '100%',
    minHeight: 64
  },
  inputFocusErrorState: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: _colors.colors.red
  },
  inputFocusState: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: _colors.colors.primary
  }
});
exports.inputStyles = inputStyles;
//# sourceMappingURL=input.js.map