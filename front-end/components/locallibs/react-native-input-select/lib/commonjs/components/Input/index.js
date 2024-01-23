"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Input = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _input = require("../../styles/input");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Input = _ref => {
  let {
    placeholder,
    value,
    onChangeText,
    style,
    primaryColor,
    textInputContainerStyle,
    ...rest
  } = _ref;
  const [isFocused, setFocus] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, textInputContainerStyle]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({
    placeholder: placeholder,
    style: [_input.inputStyles.input, _reactNative.Platform.select({
      web: {
        outlineColor: primaryColor
      }
    }), isFocused && {
      borderColor: primaryColor
    }, style],
    onFocus: () => {
      setFocus(true);
    },
    onBlur: () => setFocus(false),
    value: value,
    onChangeText: onChangeText,
    returnKeyType: "search"
  }, rest)));
};
exports.Input = Input;
const styles = _reactNative.StyleSheet.create({
  container: {
    margin: 23
  }
});
var _default = Input;
exports.default = _default;
//# sourceMappingURL=index.js.map